import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyAfogmlg1uZpnoBwwr0mF5djpYkT6t5Qko',
      authDomain: 'burgerhut-edaae.firebaseapp.com',
      databaseURL: 'https://burgerhut-edaae.firebaseio.com',
      projectId: 'burgerhut-edaae',
      storageBucket: 'burgerhut-edaae.appspot.com',
      messagingSenderId: '286247762192',
      appId: '1:286247762192:web:3f1fb52eadf7440de8cd95',
      measurementId: 'G-Y53HH56XTM',
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
