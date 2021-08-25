import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import InputText from '../../../components/InputText';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import ButtonTab from '../../../components/ButtonTab';
import GoogleFacebook from '../../../components/GoogleFacebook';
import asset from '../../../asset';
import {connect} from 'react-redux';
import {checkValidMail, checkValidPassword} from '../../../utils/validate';
import {
  loginAction,
  setUserInfoAction,
  setLoginStateAction,
  setLoginUserAction,
} from '../../../store/action';
import {bindActionCreators} from 'redux';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      email: 'son@gmail.com',
      password: '123456789',
    };
  }

  showAlert = (message) => {
    Alert.alert('Thông báo', `${message}`, [{text: 'Đồng ý'}]);
  };
  validateFied = (email, password) => {
    if (email === '' && password === '') {
      Alert.alert(
        'Thông báo',
        'Vui lòng điền đầy đủ thông tin',
        [{text: 'Đồng ý'}],
        {cancelable: false},
      );
      return false;
    }
    let errorEmail = checkValidMail(email);
    let errorPassword = checkValidPassword(password);
    if (errorEmail || errorPassword) {
      Alert.alert(
        'Thông báo ',
        `${errorEmail || errorPassword}.Vui lòng thử lại`,
        [{text: 'Đồng ý'}],
        {cancelable: false},
      );
      return false;
    }
    if (!errorPassword && !errorEmail) {
      return true;
    }
  };
  goLogin = (values) => {
    // console.log('lg1', values);
    // const {loginAction} = this.props;
    // const infoInput = {};
    // if (this.validateFied(values.email, values.password)) {
    //   infoInput.email = values.email;
    //   infoInput.password = values.password;
    //   let body_api = {
    //     body: infoInput,
    //     callback: (err, data) => {
    //       // console.log('bước 6: sau khi gọi callback xong, trả về lại data');
    //       if (data) {
    //         // this.props.saveLogin(infoInput);
    //         console.log('____respone', data);
    //         // this.props.setUserInfoAction(data.data);
    //         this.props.setLoginUserAction(data);
    this.props.setLoginStateAction(true);
    // this.props.navigation.navigate('MyTabs');
    //       }
    //     },
    //   };
    //   // console.log('buoc 1: goi login');
    //   this.props.loginAction(body_api);
    // }
  };
  render() {
    const {email, password} = this.state;
    // console.log('thong tin data ban dau:', this.props.userInfo)
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
            justifyContent: 'space-around',
            flex: 1,
          }}>
          <Top />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: scale(30),
                color: 'white',
                // marginVertical: scale(10),
              }}>
              Login
            </Text>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: scale(16),
                color: 'white',
              }}>
              Sign in for awesome chill and relax experiences.
            </Text>
            <InputText
              secureTextEntry={false}
              title="Email"
              value={this.state.email}
              onChangeText={(value) => {
                this.setState({email: value});
              }}
            />
            <InputText
              secureTextEntry={true}
              title="Password"
              value={this.state.password}
              onChangeText={(value) => {
                this.setState({password: value});
              }}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ForgetPass')}>
              <Text
                style={{
                  textAlign: 'right',
                  fontStyle: 'italic',
                  fontSize: scale(16),
                  color: 'white',
                  marginTop: scale(20),
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
            <ButtonTab
              loading={this.props.loading}
              title="Login"
              onPress={() =>
                this.goLogin({
                  email: this.state.email,
                  password: this.state.password,
                })
              }
            />
            <Text />

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: scale(20),
                  color: 'white',
                  fontStyle: 'italic',
                }}>
                Don’t have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Registration')}>
                <Text
                  style={{
                    fontSize: scale(20),
                    color: '#f8f8ff',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <Text />
            <Text />
            <Text />
            <Text />
          </ScrollView>
          <GoogleFacebook title="Or login with" />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

// console.log('aaaaeafefa', user)
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({loginAction}, dispatch);
const mapDispatchToProps = {
  loginAction,
  setUserInfoAction,
  setLoginStateAction,
  setLoginUserAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
