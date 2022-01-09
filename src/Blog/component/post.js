import React from 'react';
import {View, TouchableOpacity, Text, Linking, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import PAvatar from './avatar';
import Icon from 'react-native-vector-icons/FontAwesome';

const looked = ['gray', 'gray'];
const nolooked = ['#FCDF8F', '#BF2634'];
var content = '夕陽依舊那麼美麗，明天還是好天氣';
var background = Math.floor(Math.random() * 2001);

class PCard extends React.Component {
  constructor(props) {
    super(props);
  }
  handleShare = () => {
    console.log('share');
    Linking.openURL('https://www.facebook.com/');
  };

  render() {
    return (
      <Card style={styles.margin}>
        <Card.Title
          title={this.props.name}
          subtitle="夕陽依舊美麗，明天還是好天氣"
        />
        <Card.Content>
          <Paragraph style={styles.font}>{this.props.content}</Paragraph>
        </Card.Content>

        <Card.Actions
          style={{display: 'flex', justifyContent: 'space-between'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              style={{marginLeft: 5, marginRight: 5}}
              onPress={() => console.log('like')}>
              <Icon color="black" name="thumbs-o-up" size={25} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 5, marginRight: 5}}
              onPress={() => console.log('comment')}>
              <Icon color="black" name="comment-o" size={25} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 5, marginRight: 5}}
              onPress={this.handleShare}>
              <Icon color="black" name="link" size={25} />
            </TouchableOpacity>
          </View>
        </Card.Actions>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  font: {
    color: '#70649A',
    fontSize: 18,
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
    textAlign: 'left', //置中
  },
  margin: {
    marginVertical: 5,
  },
});

export default PCard;
