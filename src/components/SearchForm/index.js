import React, {Component} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';

export class SearchForm extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          height: scale(60),
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          borderRadius: scale(30),
          marginVertical: scale(20),
          width: '80%',
          marginLeft: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image
              resizeMode="contain"
              style={{
                width: scale(30),
                height: scale(30),
                alignItems: 'center',
              }}
              source={asset.search}
            />
          <TextInput
            style={{width: '80%'}}
            fontSize={scale(16)}
            fontStyle="italic"
            placeholder="Artists, songs, or podcasts"
            onPressIn={this.props.onPress}
            onChangeText={this.props.onChangeText}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}} />
      </TouchableOpacity>
    );
  }
}
export default SearchForm;
