import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCP9we10UmgO8fvaVv99pID1rwSNwy0rjc",
      authDomain: "mobileapp-d5c87.firebaseapp.com",
      databaseURL: "https://mobileapp-d5c87.firebaseio.com",
      projectId: "mobileapp-d5c87",
      storageBucket: "mobileapp-d5c87.appspot.com",
      messagingSenderId: "651300618867"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
