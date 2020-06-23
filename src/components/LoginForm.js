import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Header, Card, CardSection, Footer, Input, Button} from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
    };
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    } else if (this.props.successful) {
      return (
        <View>
          <Text style={styles.successfulTextStyle}>
            {this.props.successful}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner color="blue" />;
    } else {
      return (
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <Container>
        <Header headerText={'WEDDING EKA'} />
        <Content style={styles.contentStyle} padder>
          <Card>
            <CardSection>
              <Image
                source={require('../images/wedding.jpg')}
                style={{height: 200, width: 200, flex: 1}}
              />
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Input
                onChangeText={this.onEmailChange.bind(this)}
                label="Email"
                placeholder="test@gmail.com"
                value={this.props.email}
              />
            </CardSection>
            <CardSection>
              <Input
                label="Password"
                placeholder="Password"
                secureTextEntry
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>
            {this.renderButton()}
          </Card>
          {this.renderError()}
        </Content>
        <Footer footerText={'All right reserved'} />
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    successful: state.auth.successful,
    loading: state.auth.successful,
  };
};

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginForm);
