import React from 'react';
import {
  StyleSheet,
  Linking,
  TouchableOpacity,
  View,
  Image,
  Text,
  Tabs,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const mailURL = 'mailto:C108156135@nkust.edu.tw';

class SettingDrawer extends React.Component {
  handleRedirectSettingList = () => {
    // 若已於setting列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'SettingList'
      ? Actions.push('SettingList')
      : Actions.drawerClose();
  };

  handleOpenMap = () => {
    Linking.openURL(
      'https://www.google.com/maps/search/?api=1&query=高雄科技大學燕巢校區',
    );
  };

  handleOpenTelephone = () => {
    Linking.openURL('tel:0912345678');
  };

  handleOpenURL = () => {
    Linking.openURL('mailto:C108156135@nkust.edu.tw');
  };

  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.drawTitleView}>
          <Text style={styles.drawTitleText}>詳細</Text>
          <TouchableOpacity onPress={() => Actions.drawerClose()}>
            <Image
              source={{ uri: 'https://i.imgur.com/7TQkIts.png' }}
              style={styles.cancelImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.handleRedirectSettingList}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>⚙快速設定</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={this.handleOpenMap}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>📌我們在哪</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={this.handleOpenTelephone}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>☎聯絡我們</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={this.handleOpenURL}
          style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>
            📧Email:C108156135@nkust.edu.tw
          </Text>
        </TouchableOpacity>
        <Image
          style={styles.Image}
          source={{
            uri: 'https://th.bing.com/th/id/R.ff10063be9c6ca5a4813441ffdcaca72?rik=oPgigtpGsEbg2g&riu=http%3a%2f%2fceq.nkust.edu.tw%2fImage%2fHomeTitle2.png&ehk=jaiEX4Bu2%2fxaAoj1Wd8E5CjjUehN0c5VBFCkq2m%2btIA%3d&risl=&pid=ImgRaw&r=0',
          }}
        />
        <Text>@copyright2022</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    margin: 10,
  },
  drawTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  drawTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  cancelImage: {
    width: 20,
    height: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItemView: {
    marginVertical: 10,
  },
  drawerItemText: {
    fontSize: 16,
  },
  Image: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
  },
});

export default SettingDrawer;
