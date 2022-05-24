import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import db from '../Config';

export default class DisLikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      dislike: 0,
    };
  }
  componentDidMount() {}

  isDisLikeButtonPressed = () => {
    db.ref('Rating/').update({ 
      DisLikePressed: this.state.dislike
      });
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ dislike: this.state.dislike + 1 });
            this.isDisLikeButtonPressed();
          }}>
          {' '}
          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'https://www.wired.com/wp-content/uploads/2015/09/neutral_button-021.jpg',
            }}>
            {' '}
          </Image>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{this.state.dislike}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 100,
    height: 100,
    marginLeft: 150,
    marginTop: -125,
    alignSelf: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 225,
    marginTop: -25,
  },
});
