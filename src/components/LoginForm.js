import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({ error: 'Authentication failed' });
        })
      })
  }

  render() {
    const { email, password, error } = this.state;
    const { errorTextStyle } = styles;

    return (
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.com"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={errorTextStyle}>{error}</Text>

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
