import React from 'react';
import { SafeAreaView } from 'react-native';

export const WhiteStatusBar = ({ children }) => {
  return(
    <SafeAreaView
      style = {{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
    {children}
    </SafeAreaView>
  );
};
