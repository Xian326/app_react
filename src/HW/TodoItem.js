import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';

const translateType = type => {
  switch (type) {
    case 'life':
      return '生活';
    case 'work':
      return '工作';
    case 'entertainment':
      return '娛樂';
    default:
      return '無此類別';
  }
};

export default function TodoItem(props) {
  const {
    todo: { id, type, title, subTitle, time, completed },
    onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      // 根據完成狀態呈現不同的左框線顏色樣式
      style={[
        styles.content,
        completed ? styles.completedBorder : styles.unCompletedBorder,
      ]}>
      <View style={styles.imageContent}>
        <Image
          // 根據完成狀態顯示不同的待辦項目圖示
          source={{
            uri: completed
              ? 'https://lh3.googleusercontent.com/proxy/azEdU3pvmRY6qb451OSiOsHwZ75QS0nPywehwkVf7Hlt-HOQW4QQ6IAYWwJiDGiwXdaU6OPK5YTZjEYFsb1zcJMatEDviJ5THMEe0Q'
              : 'https://i.imgur.com/zrs3alB.png',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.todoContent}>
        <View>
          {/* 根據完成狀態顯示不同的標題樣式 */}
          <Text
            style={completed ? styles.completedTitle : styles.unCompletedTitle}>
            {title}
          </Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View>
          <View style={styles.tagView}>
            {/* 將 type 傳入定義的函示對應顯示中文類型文字 */}
            <Text style={styles.tagText}>{translateType(type)}</Text>
          </View>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row', // 每個 TodoItem 區塊透過水平方向排列
    alignItems: 'center', // 垂直置中
    backgroundColor: '#FFF', // 區塊內的背景顏色
    borderLeftWidth: 5, // 左邊框線粗細
    borderRadius: 2, // 框線圓角弧度
    marginVertical: 5, // 區塊上下垂直外距大小
    padding: 10, // 區塊四周內距大小
    elevation: 5, // 陰影深淺
  },
  completedBorder: {
    borderLeftColor: 'gray', // 左框線顏色
  },
  unCompletedBorder: {
    borderLeftColor: '#9999FF', // 左框線顏色
  },
  imageContent: {
    flex: 0.1, // 圖示區塊大小
  },
  image: { width: 35, height: 35 }, // 圖示大小
  todoContent: {
    flex: 0.9, // 待辦內容區塊大小
    flexDirection: 'row', // 待辦內容透過水平方向排列
    justifyContent: 'space-between', // 待辦內容左右貼齊排列
    alignItems: 'center', // 待辦內容交叉軸置中（垂直方向）
  },
  unCompletedTitle: {
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
  },
  completedTitle: {
    color: 'gray',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    textDecorationLine: 'line-through', // 標題文字加刪除線
    fontStyle: 'italic', // 標題文字加斜體
  },
  subTitle: {
    fontSize: 14, // 子標題文字大小
    color: 'gray', // 子標題文字顏色
    paddingTop: 7, // 區塊上下內距大小
  },
  tagView: {
    alignSelf: 'flex-start', // 自己本身元素排列方向
    backgroundColor: '#3366FF', // 背景顏色
    paddingHorizontal: 7, // 區塊左右內距大小
    paddingVertical: 3, // 區塊上下內距大小
    borderRadius: 5, // 邊框圓角
  },
  tagText: {
    color: 'white', // 類型文字顏色
    fontSize: 14, // 類型文字大小
  },
  time: {
    color: 'gray', // 時間文字顏色
    paddingTop: 7, // 區塊上下內距大小
    textAlign: 'right', // 靠右對齊
  },
});
