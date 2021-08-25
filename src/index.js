import React, {Component} from 'react';
import AppNavigator from './router';
import {View} from 'react-native';
export class AppContainer extends Component {
  render() {
    return (
      <View>
        <AppNavigator />
      </View>
    );
  }
}

export default AppContainer;
