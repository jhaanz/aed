import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const BlueBtn = ({ children, percentWidth, onPress }) => {
    return (
      <TouchableOpacity style={{width: percentWidth}} onPress={ onPress }>
        <View>
          <LinearGradient style={{flex:1,borderRadius:20, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 10}} colors={['#56ccF2','#2F80ED']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
            { children }
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
};

export const BlueOutlineBtn = ({ children, percentWidth, onPress }) => {
    return (
      <TouchableOpacity style={{width: percentWidth}} onPress={ onPress }>
        <View>
          <LinearGradient style={{flex:1,borderRadius:5, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 1}} colors={['#56ccF2','#2F80ED']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
            <View style={{backgroundColor:'#fff',flex:1,width:'100%',borderRadius:5, padding: 8, alignItems: 'center', justifyContent: 'center'}}>
              { children }
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
};

export const PinkBtn = ({ children, percentWidth, onPress }) => {
    return (
      <TouchableOpacity style={{width: percentWidth}} onPress={ onPress }>
        <View>
          <LinearGradient style={{flex:1,borderRadius:20, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 10}} colors={['#FF79AF','#FF698D']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
            { children }
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
};

export const PinkOutlineBtn = ({ children, percentWidth, onPress }) => {
    return (
      <TouchableOpacity style={{width: percentWidth}} onPress={ onPress }>
        <View>
          <LinearGradient style={{flex:1,borderRadius:5, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 1}} colors={['#FF79AF','#FF698D']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
            <View style={{backgroundColor:'#fff',flex:1,width:'100%',borderRadius:5, padding: 8, alignItems: 'center', justifyContent: 'center'}}>
              { children }
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
};

export const PurpleBtn = ({ children, percentWidth, onPress }) => {
    return (
      <TouchableOpacity style={{width: percentWidth}} onPress={ onPress }>
        <View>
          <LinearGradient style={{flex:1,borderRadius:20, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 10}} colors={['#F56ED5','#D169F5']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
            { children }
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
};

export const PurpleOutlineBtn = ({ children, percentWidth, onPress }) => {
    return (
      <TouchableOpacity style={{width: percentWidth}} onPress={ onPress }>
        <View>
          <LinearGradient style={{flex:1,borderRadius:5, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 1}} colors={['#F56ED5','#D169F5']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
            <View style={{backgroundColor:'#fff',flex:1,width:'100%',borderRadius:5, padding: 8, alignItems: 'center', justifyContent: 'center'}}>
              { children }
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
};

export const GreenBtn = ({ children, percentWidth, onPress }) => {
    return (
      <TouchableOpacity style={{width: percentWidth}} onPress={ onPress }>
        <View>
          <LinearGradient style={{flex:1,borderRadius:20, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 10}} colors={['#86E461','#02E3A6']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
            { children }
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
};

export const GreenOutlineBtn = ({ children, percentWidth, onPress }) => {
    return (
      <TouchableOpacity style={{width: percentWidth}} onPress={ onPress }>
        <View>
          <LinearGradient style={{flex:1,borderRadius:5, marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 1}} colors={['#86E461','#02E3A6']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>
            <View style={{backgroundColor:'#fff',flex:1,width:'100%',borderRadius:5, padding: 8, alignItems: 'center', justifyContent: 'center'}}>
              { children }
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
};
