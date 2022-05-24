import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import LikeButton from '../components/likButton'
import DisLikeButton from '../components/dislikeButton'
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToJokeScreen=()=> {
      this.props.navigation.navigate('JokeScreen')
  }

  goToHoroScopeScreen=()=> {
      this.props.navigation.navigate('HoroScopeScreen')
  }

  goToWeatherScreen=()=> {
      this.props.navigation.navigate('WeatherScreen')
  }

  goToTopNewsScreen=()=> {
      this.props.navigation.navigate('TopNewsScreen')
  }

  render(){
    return(
      <View>
        <AppHeader/>

        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"red"}]} 
            onPress={()=>this.goToJokeScreen()}>
            <Text style={styles.buttonText}>Read A Joke</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"green"}]} 
            onPress={()=>this.goToHoroScopeScreen()}>
            <Text style={styles.buttonText}>Horoscope</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToWeatherScreen()}>
            <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"black"}]} 
            onPress={()=>this.goToTopNewsScreen()}>
            <Text style={styles.buttonText}>Top News</Text>
          </TouchableOpacity>

          <LikeButton/>
          <DisLikeButton/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'sans serif',
    textAlign : 'center',
    color : 'yellow'
  }
})