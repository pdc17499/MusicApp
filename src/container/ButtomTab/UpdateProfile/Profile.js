import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../../asset';
import ItemInfor from '../../../components/ItemInfo';
import {scale} from '../../../components/ScaleSheet';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {connect} from 'react-redux';
import {setsetUserInfoAction} from '../../../store/action/index';
// import {Text, View} from 'native-base';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Phạm Quang Núi',
      phone: '0914241029',
      birthday: '03-10-1999',
      isDateTimePickerVisible: false,
    };
  }
  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});
  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

  _handleDatePicked = (date) => {
    this._hideDateTimePicker();
    this.setState({
      birthday: moment(date).format('DD-MM-YYYY'),
    });
  };
  upDateInfo = () => {
    alert('Tất cả vẫn chỉ là trải nghiệm !');
  };
  render() {
    const {birthday} = this.state;
    console.log('hello birthday', birthday);
    const {userInfo} = this.props;
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
            flex: 1,
            marginVertical: scale(20),
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{width: scale(30), width: scale(30)}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={asset.back}
              style={{width: scale(30), width: scale(30)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: scale(20),
              color: 'white',
              fontStyle: 'italic',
              textAlign: 'center',
              marginVertical: scale(20),
            }}>
            Nói cho anh nghe điều em muốn
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  resizeMode="cover"
                  source={asset.coco}
                  style={{
                    width: scale(100),
                    height: scale(100),
                    borderRadius: scale(50),
                  }}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: scale(20),
                color: 'white',
                fontStyle: 'italic',
                //   textAlign: 'center',
                marginVertical: scale(20),
              }}>
              Thông tin cá nhân
            </Text>
            <ItemInfor
              onChangeText={(value) => {
                this.setState({name: value});
              }}
              autoCapitalize="none"
              value={this.state.name}
              source={asset.name}
              name="Họ và tên"
              txtInput
              placeholder={'Nhập tên người dùng'}
            />
            <ItemInfor
              onChangeText={(value) => {
                this.setState({phone: value});
              }}
              keyboardType={'phone-pad'}
              autoCapitalize="none"
              value={this.state.phone}
              source={asset.phone}
              name="Số điện thoại"
              txtInput
              placeholder={'Nhập số điện thoại'}
            />
            <ItemInfor
              source={asset.date}
              name="Ngày sinh"
              touch
              onPress={this._showDateTimePicker}
              text={birthday ? this.state.birthday : 'Vui lòng chọn ngày'}
            />
            <DateTimePicker
              is24Hour={false}
              mode="date"
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />

            <Text
              style={{
                fontSize: scale(16),
                color: 'white',
                fontStyle: 'italic',
                // textAlign: 'center',
                marginVertical: scale(10),
              }}>
              Bạn có chắc về lựa chọn của mình chứ ?
            </Text>
            <View
              style={{
                // width: '100%',
                height: scale(60),
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: scale(10),
                marginVertical: scale(20),
              }}>
              <TouchableOpacity
                style={{
                  width: '50%',
                  height: scale(60),
                  justifyContent: 'center',
                }}
                onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.text}>Trở lại</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.upDateInfo}
                style={{
                  width: '50%',
                  height: scale(60),
                  justifyContent: 'center',
                }}>
                <Text style={styles.text}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});
const mapDispatchToProps = {
  setsetUserInfoAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
const styles = StyleSheet.create({
  text: {
    color: 'steelblue',
    textAlign: 'center',
    fontSize: scale(16),
  },
});
