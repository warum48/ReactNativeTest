/*import { AppRegistry, View, Text } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';


const AppClip = () => (
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BFEFFF"
  }}>
    <Text style={{
      fontSize: 26,
      color: "#204080"
    }}>Hello React Native App Clip</Text>
  </View>
);

AppRegistry.registerComponent(appName, () => AppClip);*/

/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import AppClip from './AppClip';
 import {name as appName} from './app.json';
 
 AppRegistry.registerComponent(appName, () => AppClip);
 
 //test commit
 