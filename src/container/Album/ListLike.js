import axios from 'axios';
import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import asset from '../../asset';
import {scale} from '../../components/ScaleSheet';
import SongItem from '../../components/SongItem';
import Top from '../../components/Top';

class ListLike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muzik: [],
    };
  }
  renderItem = ({item}) => {
    return (
      item.islike === true && (
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
          onLike={() => this.onDisLike(item.id)}
        />
      )
    );
  };
  onDisLike = (id) => {
    this.dislike(id);
    Alert.alert(
      'Thông báo',
      `Bỏ bài hát yêu thích thành công`,
      [
        {
          text: 'OK',
        },
      ],
      {cancelable: false},
    );
  };
  dislike = async (id) => {
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
          islike: false,
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
  render() {
    // console.log('dddd', this.props.albumMusic);
    // const {albumMusic} = this.props;
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
          }}>
          <View style={{height: '20%'}}>
            <TouchableOpacity
              style={{width: scale(30), width: scale(30), marginTop: 20}}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={asset.back}
                style={{width: scale(30), width: scale(30)}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: scale(20),
                color: 'white',
              }}>
              Danh sách bài hát yêu thích !
            </Text>
          </View>
          <FlatList
            style={{height: '70%', marginTop: 20}}
            data={this.state.muzik}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
  albumMusic: state.albumMusic,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ListLike);
