import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import {CardSection, Header, Footer} from '../common';

class PhotographyProfile extends Component {
  render() {
    return (
      <Container>
        <Header headerText={'Profile'} />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../images/photography2.jpg')} />
                <Body>
                  <Text>Red Dot Photography</Text>
                  <Text note>Weddings, Birthdays and Every Occasions </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <CardSection>
                  <Image
                    source={require('../../images/photography2.jpg')}
                    style={{height: 200, width: 200, flex: 1}}
                  />
                </CardSection>

                <Text>
                  Photography is the art, application and practice of creating
                  durable images by recording light or other electromagnetic
                  radiation, either electronically by means of an image sensor,
                  or chemically by means of a light-sensitive material such as
                  photographic film. It is employed in many fields of science,
                  manufacturing (e.g., photolithography), and business, as well
                  as its more direct uses for art, film and video production,
                  recreational purposes, hobby, and mass communication
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Rating ⭐️⭐️⭐️⭐️</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default PhotographyProfile;
