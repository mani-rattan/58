import * as React from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './screens/Homescreen';
import JokeScreen from './screens/JokeScreen';
import HoroScopeScreen from './screens/HoroScopeScreen';
import WeatherScreen from './screens/WeatherScreen';
import TopNewsScreen from './screens/TopNewsScreen';
import LikeButton from './components/likButton';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component{
  render()  {
    return  (
      <View>
        <AppContainer/>
      </View>
      );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokeScreen:JokeScreen,
  HoroScopeScreen:HoroScopeScreen,
  WeatherScreen:WeatherScreen,
  TopNewsScreen:TopNewsScreen
})

const AppContainer = createAppContainer(AppNavigator)