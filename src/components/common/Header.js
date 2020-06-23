import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#BC5158',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 2,
    shadowOffet: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },

  textStyle: {
    color: '#ffffff',
    fontSize: 20,
  },
};

export {Header};
