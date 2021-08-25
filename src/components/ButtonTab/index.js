import React, {Component} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../ScaleSheet';

export class ButtonTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPress, loading} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '100%',
          height: '10%',
          backgroundColor: '#99BDDD',
          borderRadius: 5,
          justifyContent: 'center',
          marginVertical: scale(15),
        }}>
        {!this.props.loading ? (
          <Text
            style={{textAlign: 'center', fontSize: scale(30), color: 'white'}}>
            {this.props.title}
          </Text>
        ) : (
          <ActivityIndicator size="small" color="white" />
        )}
      </TouchableOpacity>
    );
  }
}
export default ButtonTab;
