import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Assets from '../pages/assets';
import Asset from '../pages/asset';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/mapsToProps';

const Stack = createNativeStackNavigator();

class HomeNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="assets"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="assets" component={Assets} />
          <Stack.Screen name="asset" component={Asset} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default connect(mapStateToProps)(HomeNavigator);
