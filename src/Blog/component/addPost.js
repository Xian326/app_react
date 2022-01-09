import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //空list
      list: [],
      content: '',
    };
  }

  handleChangeCont = text => {
    this.setState({content: text});
  };

  handlePostCont = () => {
    Alert.alert('通知', '已成功發布', [{text: '確認'}]);
    console.log(this.state.content);
    return this.state.content;
  };

  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.label}>新增貼文</Text>
        <TextInput
          multiline
          numberOfLines={5}
          value={this.state.content}
          placeholder="請輸入文字.."
          onChangeText={this.handleChangeCont}
          style={styles.textareaItem}
        />
        <Button
          title="完成!"
          disabled={!this.state.content}
          onPress={this.handlePostCont}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#F0F0F0', // 區塊內的背景顏色
  },
  label: {
    color: '#70649A',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
    textAlign: 'center', //置中
  },
  textareaItem: {
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
});

export default AddPost;
