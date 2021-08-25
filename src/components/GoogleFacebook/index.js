import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';

export class GoogleFacebook extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', marginVertical: scale(20)}}>
        <Text
          style={{
            fontSize: scale(16),
            color: 'white',
            fontStyle: 'italic',
            marginBottom: scale(10),
            textAlign: 'center',
          }}>
          {this.props.title}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              style={{
                width: scale(50),
                height: scale(50),
                marginRight: scale(5),
              }}
              source={asset.google}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              style={{
                width: scale(50),
                height: scale(50),
                marginLeft: scale(5),
              }}
              source={asset.facebook}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default GoogleFacebook;
