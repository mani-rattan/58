import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import db from '../Config';

export default class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      like: 0,
    };
  }
  componentDidMount() {}

  isLikeButtonPressed=()=>{
    db.ref("Rating/").update({
      LikePressed:this.state.like
    })
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ like: this.state.like + 1 });
            this.isLikeButtonPressed()
          }}>
          {' '}
          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png',
            }}>
            {' '}
          </Image>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{this.state.like}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: -125,
    alignSelf:"center"
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 75,
    marginTop:-25
  }
});
