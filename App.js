import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/home';
import reducer from './src/store/reducer';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
const store = createStore(reducer);
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
        // screenOptions={{  headerShown: true }}
        >
          <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
