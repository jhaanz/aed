import React from 'react';
import { TextInput } from 'react-native';

export const Inputs = ({ children, placeholder }) => {
    return (
      <TextInput
        style={{
          borderWidth: .5,
          borderColor: '#b2b2b2',
          padding: 10,
          borderRadius: 20,
          color:"#323232",
        }}
        placeholder = { placeholder }
      />
    );
};

export const InputWhite = ({ children, placeholder }) => {
    return (
      <TextInput
        style={{
          padding: 10,
          borderRadius: 20,
          color:"#323232",
          backgroundColor: '#fff'
        }}
        placeholder = { placeholder }
      />
    );
};
