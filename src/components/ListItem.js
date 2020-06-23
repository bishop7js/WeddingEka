import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {
  Container,
  Content,
  List,
  //ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {Card, CardSection} from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({employee: this.props.employee});
  }

  render() {
    const {name, shift} = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Card>
            <Left>
              <Thumbnail
                square
                source={require('../images/photography1.jpg')}
              />
            </Left>
            <Body>
              <Text style={styles.titleStyle}>{name}</Text>
              <Text>{shift}</Text>
            </Body>
            <Right>
              <Button onPress={this.onRowPress.bind(this)} transparent>
                <Text style={{color: 'blue'}}>Edit</Text>
              </Button>
            </Right>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
