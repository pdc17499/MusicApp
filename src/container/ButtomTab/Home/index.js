import React, {Component} from 'react';
import asset from '../../../asset/index';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import dataAlbum, {SongList} from '../../../data/index';
import Feel from '../../../components/Feel';
import {
  setUserInfoAction,
  setLoginStateAction,
  setSaveMusicAction,
} from '../../../store/action';
import {connect} from 'react-redux';
import SongItem from '../../../components/SongItem';
import axios from 'axios';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muzik: [],
      heart: false,
    };
  }
  renderItem = ({item}) => {
    return (
      <SongItem
        heart
        item={item}
        key={item.id}
        name={item.name}
        image={item.image}
        singer={item.singer}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('Playmusic', {
            item: item,
          });
        }}
        onLike={() => this.onLike(item.id)}
      />
    );
  };
  onLike = (id) => {
    this.likee(id);
    Alert.alert(
      'Thông báo',
      'Thêm bài hát yêu thích thành công',
      [
        {
          text: 'OK',
        },
      ],
      {cancelable: false},
    );
  };
  likee = async (id) => {
    console.log('object', id);
    const response = await fetch(
      'https://fakeserver-musicaap.herokuapp.com/foreignmusic' + '/' + id,
      {
        method: 'PATCH',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          islike: true,
        }),
      },
    )
      .then((response) => {
        this.getListMusic();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  componentDidMount() {
    this.getListMusic();
  }
  getListMusic = () => {
    axios
      .get('https://fakeserver-musicaap.herokuapp.com/foreignmusic')
      .then((response) => {
        this.setState({muzik: response.data});
        this.props.setSaveMusicAction(response.data);
      })
      .catch((error) => {
        throw error;
      });
  };

  Emty = () => {
    return (
      <View style={{justifyContent: 'center'}}>
        <ActivityIndicator
          size="large"
          color="white"
          style={{alignItems: 'center', marginTop: '30%'}}
        />
      </View>
    );
  };
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
          }}>
          <Top />
          <Text
            style={{
              fontSize: scale(20),
              color: 'white',
            }}>
            How you feel today ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: scale(20),
            }}>
            <Feel uri={asset.feel1} text="Smile" />
            <Feel uri={asset.feel2} text="Surprise" />
            <Feel uri={asset.feel3} text="Sad" />
            <Feel uri={asset.feel4} text="Angry" />
          </View>
          <Text
            style={{
              fontSize: scale(20),
              color: 'white',
              marginVertical: scale(10),
            }}>
            Top Track
          </Text>
          <FlatList
            style={{height: '55%'}}
            data={this.state.muzik}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => this.Emty()}
            showsVerticalScrollIndicator={false}
            key={(item) => item.id.toString()}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  loginStatus: state.loginStatus,
});
const mapDispatchToProps = {
  setUserInfoAction,
  setLoginStateAction,
  setSaveMusicAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
