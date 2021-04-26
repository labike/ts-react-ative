/*
 * @Author: your name
 * @Date: 2021-04-26 10:05:10
 * @LastEditTime: 2021-04-26 11:46:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reactNativeTs/src/navigator/index.tsx
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import { Platform, StyleSheet } from 'react-native';

export type RootStackParamsList = {
  BottomTabs: {
    screen?: String
  },
  Detail: {
    id: String
  }
};

export type RootStackNavigation = StackNavigationProp<RootStackParamsList>;

const Stack = createStackNavigator<RootStackParamsList>();

class Navigator extends React.Component {
  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode='float'
          screenOptions={{
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth
                }
              })
            }
          }}
        >
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{
              headerTitleAlign: 'left',
              headerTitle: '首页'
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle: '详情'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigator;