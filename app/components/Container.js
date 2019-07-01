import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Card = ({ children }) => {
  return(
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#b2b2b2',
        shadowOffset: {
          width: 1,
          height: 2
        },
        shadowOpacity: .5,
        shadowRadius: 3,
        elevation: 10,
        marginBottom: 15
      }}
    >
     { children }
    </View>
  );
};

export const RowContainer = ({ children, percentWidth }) => {
  return(
    <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
      { children }
    </View>
  );
};

export const BlueContainer = ({ children, percentWidth }) => {
  return(
    <View style={{width: percentWidth}}>
      <LinearGradient style={{flex:1,borderRadius:10, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 10}} colors={['#56ccF2','#2F80ED']}>
        { children }
      </LinearGradient>
    </View>
  );
};

export const PinkContainer = ({ children, percentWidth }) => {
  return(
    <View style={{width: percentWidth}}>
      <LinearGradient style={{flex:1,borderRadius:10, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 10}} colors={['#FF79AF','#FF698D']}>
        { children }
      </LinearGradient>
    </View>
  );
};

export const PurpleContainer = ({ children, percentWidth }) => {
  return(
    <View style={{width: percentWidth}}>
      <LinearGradient style={{flex:1,borderRadius:10, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 10}} colors={['#F56ED5','#D169F5']}>
        { children }
      </LinearGradient>
    </View>
  );
};

export const GreenContainer = ({ children, percentWidth }) => {
  return(
    <View style={{width: percentWidth}}>
      <LinearGradient style={{flex:1,borderRadius:10, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 10}} colors={['#86E461','#02E3A6']}>
        { children }
      </LinearGradient>
    </View>
  );
};
