import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class IconPlay extends Component {
  render() {
    const {onHandle, text, activeOpacity} = this.props;
    return (
      <TouchableOpacity onPress={onHandle} activeOpacity={activeOpacity}>
        <Icon name={text} size={scale(24)} color="white" />
      </TouchableOpacity>
    );
  }
}
