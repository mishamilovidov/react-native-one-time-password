import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
	componentDidMount() {
  	const config = {
  	  apiKey: "AIzaSyCldzBeQoIXXJ_6n4yK-KfHETtczCHdaOQ",
  	  authDomain: "test-project-b9edd.firebaseapp.com",
  	  databaseURL: "https://test-project-b9edd.firebaseio.com",
  	  projectId: "test-project-b9edd",
  	  storageBucket: "test-project-b9edd.appspot.com",
  	  messagingSenderId: "223812986460"
  	};
  	firebase.initializeApp(config);
	}

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} overScrollMode="always">
      	<SignUpForm />
      	<SignInForm />
			</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
