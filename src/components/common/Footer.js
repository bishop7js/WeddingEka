import React from 'react';
import {Text, View} from 'react-native';

const Footer = props => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.footerText}</Text>
    </View>
  );
};

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

export {Footer};
