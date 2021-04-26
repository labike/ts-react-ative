/*
 * @Author: your name
 * @Date: 2021-04-26 10:04:38
 * @LastEditTime: 2021-04-26 10:48:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reactNativeTs/src/pages/Detail.tsx
 */
import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native'
import { RootStackParamsList } from '../navigator';

interface IProps {
  route: RouteProp<RootStackParamsList, 'Detail'>;
}

class Detail extends React.Component<IProps> {
  render () {
    const {route} = this.props
    return (
      <View>
        <Text>Detail</Text>
        <Text>{route.params?.id}</Text>
      </View>
    )
  }
}

export default Detail;