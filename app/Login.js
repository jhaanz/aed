import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { Card } from './components/Container';
import { Heading, LabelColor, SmallColor } from './components/Text';
import { BlueOutlineBtn } from './components/Buttons';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password });
  }
    render() {
    return (
      <View style={styles.forms}>
        <SmallColor>Email</SmallColor>
        <TextInput style={styles.Input}
          label="Email"
          placeholder="Email"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <SmallColor>Password</SmallColor>
        <SmallColor>{this.props.email}</SmallColor>
        <SmallColor>{this.props.password}</SmallColor>
        <TextInput style={styles.Input}
          label="Password"
          placeholder="****"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          secureTextEntry
        />

      <TouchableOpacity onPress={this.onButtonPress.bind(this)} width="100%" style={styles.button}><LabelColor color="#2F80ED">Click Here!</LabelColor></TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'stretch',
  }
});


const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
