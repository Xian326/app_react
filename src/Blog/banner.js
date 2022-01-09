import React from 'react';
import {Text, View, PermissionsAndroid, Image, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {vw, vh, vmin, vmax} from 'react-native-viewport-use';
import Icon from 'react-native-vector-icons/FontAwesome';
import Report from './component/report.js';
//import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

class Banner extends React.Component {
  componentDidMount() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
      .then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('camera granted!');
        } else {
          console.log('camera not granted');
        }
      })
      .catch(err => console.log(err));
  }
  handleOpenImageLibrary = () => {
    console.log('this.handleOpenImageLibrary');
  };

  handleReport = () => {
    <Report />;
    console.log('report');
  };

  handleChat = () => {
    Alert.alert(
      '警告!!',
      '不能聊天喔!!這程式不是讓你拿來聊天的\n是讓你戒掉手機成癮症',
      [{text: '好吧! 知道了'}],
    );
    console.log('chat');
  };
  render() {
    return (
      <View
        style={[
          {
            width: 100 * vw,
            height: 60,
            flexGrow: 0.001,
            backgroundColor: '#FFF4C1',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        ]}>
        <Image
          source={{
            uri: 'https://i.imgur.com/Y1ZA2xP.png',
          }}
          style={{
            marginLeft: 20,
            height: 40,
            width: 150,
          }}
        />
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Button
            style={{height: 'auto', width: 40, borderRadius: 20}}
            color="black"
            onPress={this.handleChat}>
            <Icon name="commenting-o" size={25}></Icon>
          </Button>
        </View>
      </View>
    );
  }
}
export default Banner;
