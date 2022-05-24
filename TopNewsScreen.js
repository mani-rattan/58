import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class TopNewsScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={{
          marginTop:75,
          marginLeft:50,
          marginRight:50
        }}>
        1 SOLDIER KILLED,3 TERRORISTS GUNNED DOWN IN JAMMU AND KASHMIR PULWAMA :
        Three terrorists were killed after an encounter broke out between militants and a joint team of security forces at Zadoora village of Pulwama in South Kashmir in the wee hours of Saturday. The terrorists have not been identified. A soldier who was critically injured in the encounter has also succumbed to his injuries, PRO Defence, Srinagar, said. This is the second encounter between militants and security forces within 24 hours in Jammu and Kashmir.
        </Text>
      </View>
    )
  }
}