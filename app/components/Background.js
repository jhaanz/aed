import React from 'react';
import { ScrollView, View, SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { WhiteStatusBar } from './Defaults'

export const BlueGradientBG = ({ children }) => {
    return (
      <LinearGradient style={{flex:1}} colors={['#56ccF2','#2F80ED']}>
        <StatusBar barStyle='light-content' />
        <SafeAreaView style={{flex:1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1, padding:15}}>
                { children }
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
};

export const WhiteBG = ({ children }) => {
    return (

      <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
        <StatusBar barStyle='dark-content' />
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
          <View style={{flex:1, padding:15}}>
            { children }
          </View>
        </ScrollView>
      </SafeAreaView>

    );
};
