import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import {scale} from '../ScaleSheet';

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {label, focused, srcActive, srcDeactive} = this.props;
    return (
      <View style={{justifyContent: 'center'}}>
        <Image
          resizeMode="contain"
          style={{
            tintColor: focused ? '#00bfff' : '#313338',
            width: scale(25),
            height: scale(25),
            marginBottom: 5,
            marginTop: 2,
          }}
          source={focused ? srcActive : srcDeactive}
        />
        <Text
          style={{
            color: focused ? '#00bfff' : '#313338',
            textAlign: 'center',
          }}>
          {label}
        </Text>
      </View>
    );
  }
}
