import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBiFGEs69-NvDNfVbZY2YpTPtv-dvKayGI",
      authDomain: "reactnative-auth-e453f.firebaseapp.com",
      databaseURL: "https://reactnative-auth-e453f.firebaseio.com",
      projectId: "reactnative-auth-e453f",
      storageBucket: "reactnative-auth-e453f.appspot.com",
      messagingSenderId: "491177441040"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

export default App;
