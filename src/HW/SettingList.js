import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default class SettingList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: '按我',
      onRight: () => {
        Alert.alert('HI', '😍辛苦老師們了謝謝!!', [{ text: '不客氣' }]);
      },
    });
  }

  handleDeviceInfo = () => {
    Alert.alert('DeviceInfo', '努力開發中...', [{ text: '好的!!' }]);
  };

  handleBrightness = () => {
    Alert.alert('Brightness', '努力開發中...', [{ text: '好的!!' }]);
  };
  handleWIFI = () => {
    Alert.alert('WIFI', '努力開發中...', [{ text: '好的!!' }]);
  };
  handleBT = () => {
    Alert.alert('BlueTooth', '努力開發中...', [{ text: '好的!!' }]);
  };
  handleLocation = () => {
    Alert.alert('Location', '努力開發中...', [{ text: '好的!!' }]);
  };
  handleVolume = () => {
    Alert.alert('Volume', '努力開發中...', [{ text: '好的!!' }]);
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={this.handleDeviceInfo}>
            <Text style={styles.Title}>關於本機</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleBrightness}>
            <Text style={styles.Title}>亮度設定</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleWIFI}>
            <Text style={styles.Title}>WIFI設定</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleBT}>
            <Text style={styles.Title}>藍芽設定</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleLocation}>
            <Text style={styles.Title}>定位設定</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleVolume}>
            <Text style={styles.Title}>音量設定</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 分割畫面區塊
    backgroundColor: '#FFF447', // 版面背景顏色
  },
  Title: {
    color: '#3EB595',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
});
