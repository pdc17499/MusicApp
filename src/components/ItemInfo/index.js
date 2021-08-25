import React, {Component} from 'react';
import {TouchableOpacity, Image, TextInput, Text, View} from 'react-native';
import {scale} from '../ScaleSheet';

export class ItemInfor extends Component {
  render() {
    const {
      txtInput,
      title,
      touch,
      placeholder,
      text,
      name,
      source,
      onPress,
    } = this.props;
    return (
      <View
        style={{
          height: scale(60),
          borderBottomWidth: 1,
          borderBottomColor: '#EDEEF0',
          justifyContent: 'space-between',
          flexDirection: 'row',
          // backgroundColor: 'steelblue',
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={source}
            style={{width: scale(40), width: scale(40)}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontWeight: '600',
              marginHorizontal: scale(10),
              color: 'white',
              fontSize: scale(16),
            }}>
            {name}
          </Text>
        </View>
        {txtInput && (
          <TextInput
            {...this.props}
            placeholderTextColor="ghostwhite"
            selectionColor="white"
            placeholder={placeholder}
            style={{
              color: 'white',
              fontSize: scale(14),
              textAlign: 'right',
              height: scale(60),
              width: '50%',
            }}
          />
        )}
        {title && (
          <View
            style={{
              height: scale(44),
              alignItems: 'flex-end',
              justifyContent: 'center',
              //   width: (vari.width * 2) / 4,
            }}>
            <Text style={{fontSize: scale(14)}} numberOfLines={1}>
              {title}
            </Text>
          </View>
        )}
        {touch && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              height: scale(44),
            }}>
            <TouchableOpacity onPress={onPress}>
              <Text
                style={{
                  fontSize: scale(13),
                  color: 'ghostwhite',
                  // textAlign: 'center',
                  paddingTop: scale(10),
                }}>
                {text}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default ItemInfor;
