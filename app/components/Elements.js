import React from 'react';
import {StyleSheet, View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-elements';

export const Background = ({ style, color, children, statusBgColor, statusBarColor }) => {
    return (
      <View style={styles.container}>
          <LinearGradient style={style} colors={color}>
          <StatusBar translucent backgroundColor={statusBgColor} barStyle={statusBarColor} />
            {children}
          </LinearGradient>
      </View>
    );
};

export const GradientCard = ({ height, color, width, children }) => {
    return (
      <LinearGradient style={{width: width, borderRadius: 5, height: height, elevation: 5}} colors={color}>
        {children}
      </LinearGradient>
    );
};

export const OwnCard = ({ children }) => {
    return (
      <View
        style={{
          shadowColor: "#0e1111",
          shadowOpacity: 0.1,
          shadowRadius: 1,
          shadowOffset: {
            height: 1,
            width: 0.3,
          },
          margin: 0
        }}
      >
        {children}
      </View>
    );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});
