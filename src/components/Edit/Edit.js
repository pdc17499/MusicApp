import React, {Component, useState} from 'react';
import {Text, TouchableOpacity, View, Switch} from 'react-native';
import {scale} from '../ScaleSheet';
export default class Edit2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }
  render() {
    return (
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
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            this.setState({isEnabled: !this.state.isEnabled})
          }
          value={this.state.isEnabled}
        />
      </View>
    );
  }
}
