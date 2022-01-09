import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class UserRouter extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.title}>個人資料</Text>
        <View>
          <Image
            style={{
              width: 200,
              height: 50,
              resizeMode: 'contain',
              backgroundColor: '#C0C0C0',
              justifyContent: 'center',
              float: 'center',
              marginVertical: 5,
            }}
            source={{
              uri: 'https://i.imgur.com/GgmZ5LT.gif',
            }}
          />
        </View>
        <View style={styles.font}>
          <View style={styles.item}>
            <Text style={styles.label}>用戶名稱: 江彥霆</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>用戶帳號: Izel_891025</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>出生: 89/10/25</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>性別: 男</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>城市: 台南市</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>就讀學校: 高雄科技大學</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>戀愛性向: 女性</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFFCEC', // 區塊內的背景顏色
  },
  title: {
    color: '#70649A',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
    textAlign: 'center', //置中
  },
  label: {
    fontSize: 15,
    marginVertical: 3,
    marginRight: 50,
    textAlign: 'center', //置中
  },
});

export default UserRouter;
