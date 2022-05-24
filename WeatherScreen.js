///import * as React from 'react';
//import { View, Text, TouchableOpacity , StyleSheet, Image } from 'react-native';
//import AppHeader from '../components/AppHeader';

//export default class WeatherScreen extends React.Component{
//render(){
  //  return(
   //   <View>
    //    <AppHeader/>
     //  <Text style={{
        //  marginTop:75,
        //  marginLeft:50,
        //  marginRight:50
      //  }}>
      //  KOLKATA:
       // Partly Clouds,
      //  32 degrees
       // </Text>
      //</View>
  //  )
 //}
//}

//export default class WeatherScreen extends Component {
 // constructor() {
   // super();
   // this.state = {
   //   weather: '',
   // };
  //}

  //getWeather = async () => {
   // var url = 'https://fcc-weather-api.glitch.me/api/current?lat=30.9&lon=75.8';
   // return fetch(url)
     // .then(response => response.json())
     // .then(responseJson => {
      //  this.setState({
        //  weather: responseJson,
     //   });
     // })
     // .catch(error => {
       // console.error(error);
     // });
  //};

  //componentDidMount = () => {
  //  this.getWeather();
  //};

  //render() {
   // if (this.state.weather === '') {
     // return (
      //  <View style={styles.container}>
       ///   <Text>Loading...</Text>
      //  </View>
    //  );
   // } else {
    //  return (
   //     <View style={styles.container}>
         // <View style={styles.subContainer}>
          //  <Text style={styles.title}>
           //   Weather Forecast
            //</Text>
          //  <Image style={styles.cloudImage} source={require('./wheather.jfif')}>
            //<View style={styles.textContainer}>
            //<Text style={{fontSize:18}}>
            //  Temperature: {this.state.weather.main.temp}&deg;C
           // </Text>
           // <Text style={{fontSize:18, margin:20}}>
           //   Humidity : {this.state.weather.main.humidity}
           // </Text>
          //  <Text style={{fontSize:18 }}>
           //   Forecast: {this.state.weather.weather[0].description}
           // </Text>
         // </View>
        //  </View>    
        //</View>
  //    );
  //  }
 // }
//}

//const styles = StyleSheet.create({
 // container: {
  // flex:1
 // },
 // subContainer : { 
  //  flex: 1, 
   /// borderWidth: 1, 
   /// alignItems: 'center' 
   // },
   // title:{ 
     // marginTop: 50, 
   //   fontSize: 30,
  //    fontWeight: '550' 
  //  },
   // cloudImage :{ 
    //  width: 200, 
   //   height: 200, 
   //   marginTop: 30 
  //  },
   // textContainer : { 
    //  flex: 1,
    //  alignItems: 'center', 
    //  flexDirection:'row', 
    //  marginTop:-150
  //  }
//});


import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=30.9&lon=75.8';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>
              Weather Forecast
            </Text>
            <Image
              style={styles.cloudImage}
              source={require('./wheather.jfif')}
            />
            <View style={styles.textContainer}>
            <Text style={{fontSize:18}}>
              Temperature: {this.state.weather.main.temp}&deg;C
            </Text>
            <Text style={{fontSize:18, margin:20}}>
              Humidity : {this.state.weather.main.humidity}
            </Text>
            <Text style={{fontSize:18 }}>
              Forecast: {this.state.weather.weather[0].description}
            </Text>
          </View>
          </View>    
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 30,
      fontWeight: '550' 
    },
    cloudImage :{ 
      width: 200, 
      height: 200, 
      marginTop: 30 
    },
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-150
    }
});


