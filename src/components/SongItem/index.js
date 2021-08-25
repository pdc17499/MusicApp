import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../ScaleSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
export default class SongItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeart: false,
    };
  }
  render() {
    const {item, onPress, onLike, onPlay} = this.props;
    return (
      item && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: scale(8),
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={onPress}>
            <Image
              source={{uri: this.props.image}}
              style={{
                width: scale(60),
                height: scale(60),
                borderRadius: scale(10),
              }}
              resizeMode="contain"
            />
            <View style={{marginLeft: scale(8)}}>
              <Text
                style={{
                  fontSize: scale(16),
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {this.props.name}
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'white',
                  fontWeight: 'normal',
                }}>
                {this.props.singer}
              </Text>
            </View>
          </TouchableOpacity>
          {this.props.heart && (
            <View>
              <TouchableOpacity onPress={onLike}>
                {item.islike ? (
                  <Icon2 name="heart" size={scale(23)} color="white" />
                ) : (
                  <Icon name="heart-outline" size={scale(24)} color="white" />
                )}
              </TouchableOpacity>
            </View>
          )}
          {this.props.play && (
            <View>
              <TouchableOpacity onPress={onPlay}>
                <Icon2 name="play" size={scale(20)} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      )
    );
  }
}
