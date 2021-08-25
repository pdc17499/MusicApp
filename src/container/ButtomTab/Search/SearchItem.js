import axios from 'axios';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../../asset';
import {scale} from '../../../components/ScaleSheet';
import SearchForm from '../../../components/SearchForm';
import SongItem from '../../../components/SongItem';

export default class SearchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataUse:[],
      error: null,
      query: '',
    };
  }
  Emty = () => {
    return (
      <View style={{justifyContent: 'center', marginTop: '50%'}}>
        <ActivityIndicator
          size="small"
          color="white"
          style={{alignItems: 'center', marginTop: '30%'}}
        />
      </View>
    );
  };
  componentDidMount() {
    this.getListMusic();
  }
  getListMusic = () => {
    axios
      .get('https://fakeserver-musicaap.herokuapp.com/foreignmusic')
      .then((response) => {
        this.setState({
          data: response.data,
          dataUse:response.data,
        });
      })
      .catch((error) => {
        this.setState({
        });
        throw error;
      });
  };
  renderItem = ({item}) => {
    return (
      <SongItem
        item={item}
        key={item.id}
        name={item.name}
        image={item.image}
        singer={item.singer}
        onPress={() => {
          this.props.navigation.navigate('Playmusic', {
            item: item,
          });
        }}
        play
        onPlay={() => {
          this.props.navigation.navigate('Playmusic', {
            item: item,
          });
        }}
      />
    );
  };
  handSearch = (text) => {
   
    let data = [];
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i]?.name.toLowerCase().includes(text.toLowerCase())===true) {
        data.push(this.state.data[i]);
      }
    }
    this.setState({dataUse: data});
  };
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={asset.back}
              style={{width: 30, height: 30, alignItems: 'center'}}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <SearchForm onChangeText={this.handSearch} />
        </View>
        <FlatList
          style={{height: '55%', marginHorizontal: 20}}
          data={this.state.dataUse}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => this.Emty()}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    );
  }
}
