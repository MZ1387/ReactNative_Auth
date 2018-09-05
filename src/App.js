import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBiFGEs69-NvDNfVbZY2YpTPtv-dvKayGI",
      authDomain: "reactnative-auth-e453f.firebaseapp.com",
      databaseURL: "https://reactnative-auth-e453f.firebaseio.com",
      projectId: "reactnative-auth-e453f",
      storageBucket: "reactnative-auth-e453f.appspot.com",
      messagingSenderId: "491177441040"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={null}>
            Log Out
          </Button>
        );
        break;
      case false:
        return  <LoginForm />;
        break;
      default:
        return  <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
