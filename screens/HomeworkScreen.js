import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

import db from "../config";
import firebase from "firebase";

import LoginScreen from './LoginScreen';
import MyHeader from '../components/MyHeader';
import HomeScreen from './HomeScreen';

export default class HomeworkScreen extends Component {

    render(){
        return(
            <View style={{
                flex:2,
                fontSize: 30,
                justifyContent:'center',
                alignItems:'center'
              }}>
                  <View style={{flex:1}}>
            <MyHeader title="Student Assistant App" />

              
            </View>
                <Text>homework screen</Text>
            </View>
        )
    }
}
