/*
 * @Author: your name
 * @Date: 2021-04-26 10:03:06
 * @LastEditTime: 2021-04-26 10:33:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reactNativeTs/src/pages/Home.tsx
 */
import React from 'react';
import { Button, Text, View } from 'react-native'
import { RootStackNavigation } from '../navigator';

interface IProps {
  navigation: RootStackNavigation;
};

class Home extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: '#asdwq123'
    });
  }
  render () {
    return (
      <View>
        <Text>Home</Text>
        <Button onPress={this.onPress} title="跳转"></Button>
      </View>
    )
  }
}

export default Home;