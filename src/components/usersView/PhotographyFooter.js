import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

class PhotographyFooter extends Component {
  onButtonPress() {
    Actions.auth();
  }

  render() {
    const {viewStyle} = styles;

    return (
      <View style={viewStyle}>
        <Button onPress={this.onButtonPress.bind(this)} success>
          <Text> POST YOUR AD </Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#BC5158',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 7,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },

  textStyle: {
    color: '#ffffff',
    fontSize: 12,
  },
};

export default PhotographyFooter;
