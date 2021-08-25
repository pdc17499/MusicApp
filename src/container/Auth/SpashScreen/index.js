import {Assets} from '@react-navigation/stack';
import React, {Component} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import asset from '../../../asset';
import {scale} from '../../../components/ScaleSheet';
import {
  setUserInfoAction,
  setLoginStateAction,
  loginAction,
  setLoginUserAction,
} from '../../../store/action';
export class SplashScreen extends Component {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.loadApp();
    }, 600);
  }
  loadApp = () => {
    const {isChanged, loginStatus, userInfo} = this.props;

    // if (loginStatus) {
    //   // this.resetLogin();
    //   this.props.navigation.navigate('MyTabs');
    // } else {
    //   this.props.navigation.navigate('Login');
    // }
    // if (isChanged) {
    //   this.props.navigation.navigate('Login');
    // } else {
    //   this.props.navigation.navigate('Intro');
    // }
    this.props.navigation.navigate('MyTabs');
  };
  resetLogin = () => {
    const {userNew} = this.props;
    const infoInput = {};
    infoInput.email = userNew.email;
    infoInput.password = userNew.password;
    infoInput.type = 'Account';
    // console.log('uaududuauuusd', userNew, infoInput);
    let body_api = {
      body: infoInput,
      callback: (err, data) => {
        if (data.error === false) {
          this.props.setUserInfoAction(data.data);
          this.props.setLoginUserAction(infoInput);
        }
      },
    };
    this.props.loginAction(body_api);
  };
  render() {
    return (
      <LinearGradient
        end={{x: 1, y: 1}}
        colors={['#4682b4', '#87ceeb']}
        locations={[0, 1]}
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Image
          resizeMode="contain"
          style={{
            width: scale(250),
            height: scale(250),
            marginTop: '20%',
            marginVertical: scale(20),
          }}
          source={asset.Logo}
        />
        <Text
          style={{fontSize: scale(14), color: 'white'}}
          // onPress={() => this.onCheck()}
        >
          Hãy nói anh nghe điều em muốn
        </Text>
        <ActivityIndicator style={{marginTop: scale(15)}} color="white" />
      </LinearGradient>
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  user: state.user,
  loginStatus: state.loginStatus,
  isChanged: state.isChanged,
});
const mapDispatchToProps = {
  setUserInfoAction,
  setLoginStateAction,
  loginAction,
  setLoginUserAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
