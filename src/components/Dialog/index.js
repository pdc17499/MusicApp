import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {TouchableOpacity, View, Text} from 'react-native';
import {scale, vScale} from '../ScaleSheet';

export default class Dialog extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({visible: true});
  };

  hide = () => {
    this.setState({visible: false});
  };

  render() {
    const {
      title,
      message,
      fontFamily,
      textOk,
      pressBtnOK,
      textCancel,
      pressCancel,
      messageData,
    } = this.props;
    const {visible} = this.state;

    return (
      <Modal
        isVisible={visible}
        backdropOpacity={0.4}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        style={{justifyContent: 'center', alignItems: 'center'}}
        ref={(ref) => (this.popup = ref)}>
        <View
          style={{
            width: '100%',
            borderRadius: scale(13),
            backgroundColor: 'white',
          }}>
          <View style={{padding: scale(20), justifyContent: 'center'}}>
            {title && (
              <Text style={{fontWeight: 'bold', fontSize: scale(20)}}>
                Thông báo
              </Text>
            )}
            <Text style={{fontSize: scale(16)}}>{messageData || ''}</Text>
            <Text style={{fontSize: scale(16)}}>{message}</Text>
          </View>

          <View style={styles.line} />

          <View style={{flexDirection: 'row'}}>
            {textCancel && (
              <View style={{width: '50%', flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={pressCancel}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: vScale(50),
                  }}>
                  <Text style={{color: '#FF0000', fontSize: scale(16)}}>
                    {textCancel}
                  </Text>
                </TouchableOpacity>
                <View style={styles.lineHeight} />
              </View>
            )}

            <TouchableOpacity
              onPress={pressBtnOK}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: textCancel ? '50%' : '100%',
                height: vScale(50),
              }}>
              <Text style={{color: 'blue', fontSize: scale(16)}}>{textOk}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

Dialog.defaultProps = {
  textOk: 'agree',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: scale(15),
  },
  lineHeight: {
    backgroundColor: 'gray',
    // width: vari.borderWidth,
    height: vScale(50),
  },
  line: {
    backgroundColor: 'gray',
    width: '100%',
    // height: vari.borderWidth,
    marginTop: scale(5),
  },
});
