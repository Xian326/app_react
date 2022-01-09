import React from 'react';
import Banner from '../banner';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {vw, vh} from 'react-native-viewport-use';
import PAvatar from '../component/avatar';
import PCard from '../component/post';

const style = StyleSheet.create({
  scrollh: {
    flexGrow: 0.025,
    height: 10 * vh,
    width: 100 * vw,
    backgroundColor: 'white',
  },
});

const looked = ['gray', 'gray'];
const nolooked = ['#FFFCEC', '#eef5db'];

export default class Home extends React.Component {
  render() {
    return (
      <View style={[{flex: 1, backgroundColor: '#E0E0E0'}]}>
        <Banner />
        <ScrollView>
          <PCard name={'葉庭禎'} content={'你好'} />
          <PCard name={'王維之'} content={'這個'} />
          <PCard name={'余品萱'} content={'期末'} />
          <PCard name={'鄭繼威'} content={'報幹'} />
          <PCard name={'江彥霆'} content={'難做=='} />
          <PCard name={'楊詔欽'} content={'0 W 0'} />
        </ScrollView>
      </View>
    );
  }
}
