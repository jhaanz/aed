import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers   from './reducers/';
import firebase  from 'firebase';
import { Card } from './components/Container';
import { Heading, LabelColor, SmallColor } from './components/Text';
import LoginForm  from './Login';
import { BlueOutlineBtn } from './components/Buttons';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyAncSy3aeY2zpVPDlw0kCcy7SBOa-O1pEM",
      authDomain: "crud-45c11.firebaseapp.com",
      databaseURL: "https://crud-45c11.firebaseio.com",
      projectId: "crud-45c11",
      storageBucket: "",
      messagingSenderId: "138405720044",
      appId: "1:138405720044:web:eefb10da744c7de3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <Card style={{flex: 1}}>
              <Heading>Login</Heading>
                <LoginForm />
            </Card>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#d3d3d3"
  },
  view: {
    flex: 1,
    backgroundColor: 'red',
    height: "100"
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#323232',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  Input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#323232',
    height: 40,
    paddingLeft: 10
  },
  forms: {
    justifyContent: 'space-between'
  }
});



export default App;
