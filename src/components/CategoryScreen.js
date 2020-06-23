import React, {Component} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Container, Content, Text, Button, Body} from 'native-base';
import {Card, CardSection} from './common';
import {Actions} from 'react-native-router-flux';

class CategoryScreen extends Component {
  onPhotographyImagePress() {
    Actions.photography();
  }

  render() {
    return (
      <Container>
        <Content style={styles.contentStyle}>
          <TouchableWithoutFeedback
            onPress={this.onPhotographyImagePress.bind(this)}>
            <View>
              <Card>
                <CardSection>
                  <Image
                    source={require('../images/photography3.jpg')}
                    style={{height: 100, width: null, flex: 1}}
                  />
                </CardSection>
                <CardSection>
                  <Body>
                    <Button
                      style={{height: 20, width: null, flex: 1}}
                      transparent>
                      <Text style={{color: 'black'}}>Photography</Text>
                    </Button>
                  </Body>
                </CardSection>
              </Card>
            </View>
          </TouchableWithoutFeedback>

          <Card>
            <CardSection>
              <Image
                source={require('../images/cars.jpeg')}
                style={{height: 100, width: null, flex: 1}}
              />
            </CardSection>
            <CardSection>
              <Body>
                <Button style={{height: 20, width: null, flex: 1}} transparent>
                  <Text style={{color: 'black'}}>Rent your car</Text>
                </Button>
              </Body>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <Image
                source={require('../images/hotel.jpg')}
                style={{height: 100, width: null, flex: 1}}
              />
            </CardSection>
            <CardSection>
              <Body>
                <Button style={{height: 20, width: null, flex: 1}} transparent>
                  <Text style={{color: 'black'}}>Hotel and Resorts</Text>
                </Button>
              </Body>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <Image
                source={require('../images/music.jpg')}
                style={{height: 100, width: null, flex: 1}}
              />
            </CardSection>
            <CardSection>
              <Body>
                <Button style={{height: 10, width: null, flex: 1}} transparent>
                  <Text style={{color: 'black'}}>Music</Text>
                </Button>
              </Body>
            </CardSection>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
  contentStyle: {
    backgroundColor: '#F8B9D1',
  },
};

export default CategoryScreen;
