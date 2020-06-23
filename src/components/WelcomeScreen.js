import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Card} from './common';
import {Actions} from 'react-native-router-flux';

class WelcomeScreen extends Component {
  onImagePress() {
    Actions.category();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onImagePress.bind(this)}>
        <View style={styles.container}>
          <Card>
            <Image
              source={require('../images/wedding.jpg')}
              style={styles.backgroundImage}
            />
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8B9D1',
    flexDirection: 'column',
  },
  backgroundImage: {
    width: 320,
    height: 420,
  },
});

export default WelcomeScreen;
