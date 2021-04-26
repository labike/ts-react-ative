/*
 * @Author: your name
 * @Date: 2021-04-26 10:51:26
 * @LastEditTime: 2021-04-26 13:29:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reactNativeTs/src/navigator/BottomTabs.tsx
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import { RootStackNavigation, RootStackParamsList } from '.';
import { RouteProp, TabNavigationState } from '@react-navigation/core';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export type BottomTabParamsList = {
  Home: undefined,
  Listen: undefined,
  Found: undefined,
  Account: undefined
}

type Route = RouteProp<RootStackParamsList, 'BottomTabs'> & {
  state?: TabNavigationState;
}

export interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

const Tabs = createBottomTabNavigator<BottomTabParamsList>();

function getHeaderTitle(route: Route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  switch (routeName) {
    case 'Home':
      return '首页'
      break
    case 'Listen':
      return '我听'
      break
    case 'Found':
      return '发现'
      break
    case 'Account':
      return '我的'
      break
    default:
      return '首页'
  }
}

class BottomTabs extends React.Component<IProps> {
  componentDidUpdate () {
    const {navigation, route} = this.props
    navigation.setOptions({
      headerTitle: getHeaderTitle(route)
    })
  }
  render () {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#f86442'
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
        />
        <Tabs.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '发现'
          }}
        />
        <Tabs.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现'
          }}
        />
        <Tabs.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '我的'
          }}
        />
      </Tabs.Navigator>
    )
  }
}

export default BottomTabs;