import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
//import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen.js';
import SettingScreen from '../screens/SettingScreen';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },

  
  Notification : {
    screen : NotificationScreen
  },
  
  Setting : {
    screen : SettingScreen
  }
},
  /*{
    contentComponent:CustomSideBarMenu
  },*/
  {
    initialRouteName : 'Home'
  })
