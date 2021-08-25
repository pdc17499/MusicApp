import React, {Component} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import asset from '../../../asset';
import ButtonTab from '../../../components/ButtonTab';
import InputText from '../../../components/InputText';
import {scale} from '../../../components/ScaleSheet';
import {forgetPassAction} from '../../../store/action';
import {checkValidMail} from '../../../utils/validate';

export class ForgetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  showAlert = (message) => {
    Alert.alert('Thông báo', `${message}`, [{text: 'Đồng ý'}]);
  };
  validateFied = (email) => {
    if (email === '') {
      Alert.alert(
        'Thông báo',
        'Vui lòng điền đầy đủ thông tin',
        [{text: 'Đồng ý'}],
        {cancelable: false},
      );
      return false;
    }
    let errorEmail = checkValidMail(email);
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
  goForgetPass = (values) => {
    const {changePass} = this.props;
    const infoInput = {};
    if (this.validateFied(values.email)) {
      infoInput.email = values.email;
      let body_api = {
        body: infoInput,
        callback: (err, data) => {
          // console.log('bước 6: sau khi gọi callback xong, trả về lại data');
          if (data && data.data && data.data.error === false) {
            Alert.alert(
              'Thông báo ',
              'Lấy mật khẩu thành công',
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
      this.props.forgetPassAction(body_api);
    }
  };
  render() {
    const {email} = this.state;
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
            flex: 1,
            marginVertical: scale(20),
          }}>
          <TouchableOpacity
            style={{width: scale(30), width: scale(30)}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={asset.back}
              style={{
                width: scale(30),
                width: scale(30),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: scale(250),
                  height: scale(250),
                }}
                source={asset.Logo}
              />
              <InputText
                title="Email"
                value={this.state.email}
                onChangeText={(value) => {
                  this.setState({email: value});
                }}
              />
              <Text />
              <ButtonTab
                onPress={() =>
                  this.goForgetPass({
                    email: this.state.email,
                  })
                }
                title="Submit"
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = () => ({});

// console.log('aaaaeafefa', user)
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({loginAction}, dispatch);
const mapDispatchToProps = {
  forgetPassAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPass);
