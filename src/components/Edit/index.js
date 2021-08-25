import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';

export default class Edit extends Component {
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            //   borderBottomWidth: 1,
            //   borderBottomColor: 'white',
            marginVertical: scale(10),
          }}>
          <Text
            style={{
              fontSize: scale(20),
              color: 'white',
              fontStyle: 'italic',
              fontWeight: 'normal',
            }}>
            {this.props.text}
          </Text>

          <Image
            resizeMode="contain"
            style={{width: scale(20), width: scale(20), marginTop: scale(8)}}
            source={asset.next}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
