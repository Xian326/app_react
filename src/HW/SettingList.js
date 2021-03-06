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
      rightTitle: 'ææ',
      onRight: () => {
        Alert.alert('HI', 'ðè¾è¦èå¸«åäºè¬è¬!!', [{ text: 'ä¸å®¢æ°£' }]);
      },
    });
  }

  handleDeviceInfo = () => {
    Alert.alert('DeviceInfo', 'åªåéç¼ä¸­...', [{ text: 'å¥½ç!!' }]);
  };

  handleBrightness = () => {
    Alert.alert('Brightness', 'åªåéç¼ä¸­...', [{ text: 'å¥½ç!!' }]);
  };
  handleWIFI = () => {
    Alert.alert('WIFI', 'åªåéç¼ä¸­...', [{ text: 'å¥½ç!!' }]);
  };
  handleBT = () => {
    Alert.alert('BlueTooth', 'åªåéç¼ä¸­...', [{ text: 'å¥½ç!!' }]);
  };
  handleLocation = () => {
    Alert.alert('Location', 'åªåéç¼ä¸­...', [{ text: 'å¥½ç!!' }]);
  };
  handleVolume = () => {
    Alert.alert('Volume', 'åªåéç¼ä¸­...', [{ text: 'å¥½ç!!' }]);
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={this.handleDeviceInfo}>
            <Text style={styles.Title}>éæ¼æ¬æ©</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleBrightness}>
            <Text style={styles.Title}>äº®åº¦è¨­å®</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleWIFI}>
            <Text style={styles.Title}>WIFIè¨­å®</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleBT}>
            <Text style={styles.Title}>èè½è¨­å®</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleLocation}>
            <Text style={styles.Title}>å®ä½è¨­å®</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleVolume}>
            <Text style={styles.Title}>é³éè¨­å®</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // åå²ç«é¢åå¡
    backgroundColor: '#FFF447', // çé¢èæ¯é¡è²
  },
  Title: {
    color: '#3EB595',
    fontSize: 20, // æ¨é¡æå­å¤§å°
    fontWeight: 'bold', // æ¨é¡æå­ç²ç´°
    padding: 10, // ä¸ä¸åç´å§èå¤§å°
  },
});
