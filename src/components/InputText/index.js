import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {scale} from '../ScaleSheet';

export class InputText extends Component {
  render() {
    const {secureTextEntry, onChangeText, value} = this.props;
    return (
      <View style={{width: '100%', height: scale(70), marginTop: scale(20)}}>
        <Text
          style={{fontSize: scale(18), color: '#f8f8ff', fontStyle: 'italic'}}>
          {this.props.title}
        </Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={{
            width: '100%',
            height: scale(50),
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            color: 'white',
          }}
          secureTextEntry={secureTextEntry}
          fontSize={scale(16)}
          fontStyle="italic"
          placeholder="Enter here"
        />
      </View>
    );
  }
}
export default InputText;
