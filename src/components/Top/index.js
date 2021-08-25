import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';

export class Top extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: scale(70),
          marginTop: scale(10),
        }}>
        <Image
          style={{width: scale(50), height: scale(50)}}
          source={asset.minilogo}
        />
        <TouchableOpacity>
          {/* <Image
            resizeMode="cover"
            style={{width: scale(50), height: scale(50), borderRadius: 25}}
            source={require('../../asset/images/coco.png')}
          /> */}
          {/* <Text>Sieg</Text> */}
        </TouchableOpacity>
      </View>
    );
  }
}
export default Top;
