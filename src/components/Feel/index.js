import React, {Component} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';

export class Feel extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Image
          resizeMode="cover"
          style={{width: scale(70), height: scale(70)}}
          source={this.props.uri}
        />
        <Text
          style={{
            fontSize: scale(14),
            color: '#f8f8ff',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
export default Feel;
