import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputText from '../../../components/InputText';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import ButtonTab from '../../../components/ButtonTab';
import GoogleFacebook from '../../../components/GoogleFacebook';
import asset from '../../../asset';
import {checkValidMail} from '../../../utils/validate';
import {registrationAction} from '../../../store/action/index';
import {connect} from 'react-redux';
export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nguyen Lan Huong',
      email: 'maithuhoai@gmail.com',
      password: 'sondaik9x',
      confirmPassWord: 'sondaik9x',
      phone: '0914241029',
    };
  }
  showAlert = (message) => {
    Alert.alert('Thông báo', `${message}`, [{text: 'Đồng ý'}]);
  };
  validateFied = (name, email, password, confirmPassWord, phone) => {
    if (
      name === '' &&
      email === '' &&
      password === '' &&
      confirmPassWord === '' &&
      phone === ''
    ) {
      Alert.alert(
        'Thông báo',
        'Vui lòng điền đầy đủ thông tin',
        [{text: 'Đồng ý'}],
        {cancelable: false},
      );
      return false;
    }
    let errorEmail = checkValidMail(email);

    if (this.state.password.length < 6) {
      this.showAlert('Mật khẩu phải tối thiểu 6 ký tự');
      return false;
    }
    if (this.state.password !== this.state.confirmPassWord) {
      this.showAlert('Xác nhận mật khẩu không khớp');
      return false;
    }

    if (errorEmail) {
      Alert.alert(
        'Thông báo ',
        `${errorEmail}.Vui lòng thử lại`,
        [{text: 'Đồng ý'}],
        {cancelable: false},
      );
      return false;
    }
    if (!errorEmail) {
      return true;
    }
  };
  goRegister = (values) => {
    const {register} = this.props;
    const infoInput = {};
    if (
      this.validateFied(
        values.name,
        values.email,
        values.password,
        values.confirmPassWord,
        values.phone,
      )
    ) {
      infoInput.fullname = values.name;
      infoInput.email = values.email;
      infoInput.password = values.password;
      infoInput.repassword = values.confirmPassWord;
      infoInput.phone = values.phone;
      let body_api = {
        body: infoInput,
        callback: (err, data) => {
          // console.log('bước 6: sau khi gọi callback xong, trả về lại data');
          if (data.error === false) {
            Alert.alert(
              'Thông báo ',
              'Đăng kí tài khoản thành công',
              [
                {
                  text: 'Đồng ý',
                  onPress: () => this.props.navigation.goBack(),
                },
              ],
              {cancelable: false},
            );
          }
        },
      };
      // console.log('buoc 1: goi login');
      this.props.registrationAction(body_api);
    }
  };
  render() {
    const {name, email, password, confirmPassWord, phone} = this.state;
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
            // marginVertical: scale(10),
            // justifyContent: 'space-around',
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
              Sign up
            </Text>
            {/* <Text
              style={{
                fontStyle: 'italic',
                fontSize: scale(16),
                color: 'white',
              }}>
              Sign up for free meditation, chill and relax experiences with
              music.
            </Text> */}

            <InputText
              value={name}
              onChangeText={(value) => this.setState({name: value})}
              title="Name"
            />
            <InputText
              value={email}
              onChangeText={(value) => this.setState({email: value})}
              title="Email"
            />
            <InputText
              value={phone}
              onChangeText={(value) => this.setState({phone: value})}
              title="Phone"
            />
            <InputText
              value={password}
              onChangeText={(value) => this.setState({password: value})}
              secureTextEntry={true}
              title="Password"
            />
            <InputText
              value={confirmPassWord}
              onChangeText={(value) => this.setState({confirmPassWord: value})}
              secureTextEntry={true}
              title="Confirm Password"
            />
            <Text />
            <ButtonTab
              loading={this.props.loading}
              onPress={() =>
                this.goRegister({name, email, password, confirmPassWord, phone})
              }
              title="Sign Up"
            />

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: scale(20),
                  color: 'white',
                  fontStyle: 'italic',
                }}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text
                  style={{
                    fontSize: scale(20),
                    color: '#f8f8ff',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
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
  // userInfo : state.userInfo
});

// console.log('aaaaeafefa', user)
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({loginAction}, dispatch);
const mapDispatchToProps = {
  registrationAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
