import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {Header, Card, CardSection} from '../common';
import PhotographyFooter from './PhotographyFooter';
import {Actions} from 'react-native-router-flux';

class Photography extends Component {
  onButtonPress() {
    Actions.photographyProfile();
  }

  render() {
    return (
      <Container>
        <Header headerText={'Photographers'} />
        <Content style={styles.contentStyle} padder>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require('../../images/photography2.jpg')}
                />
              </Left>
              <Body>
                <Text>Red Dot Photography</Text>
                <Text note numberOfLines={1}>
                  ⭐️⭐️⭐️⭐️⭐️
                </Text>
              </Body>
              <Right>
                <Button onPress={this.onButtonPress.bind(this)} transparent>
                  <Text style={{color: 'blue'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require('../../images/photography3.jpg')}
                />
              </Left>
              <Body>
                <Text>Sulakshitha Photography</Text>
                <Text note numberOfLines={1}>
                  ⭐️⭐️⭐️⭐️
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{color: 'blue'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={require('../../images/photography1.jpg')}
                />
              </Left>
              <Body>
                <Text>Thilina Studios</Text>
                <Text note numberOfLines={1}>
                  ⭐️⭐️⭐️
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{color: 'blue'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
        <PhotographyFooter />
      </Container>
    );
  }
}

const styles = {
  contentStyle: {
    backgroundColor: '#FDE2EE',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  successfulTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#027125',
  },
};

export default Photography;
