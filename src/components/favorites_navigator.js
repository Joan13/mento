import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/mapsToProps';
import Favorites from '../pages/favorites';
import Favorite from '../pages/favorite';

const Stack = createNativeStackNavigator();

class FavoritesNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="favorites"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="favorites" component={Favorites} />
          <Stack.Screen name="favorite" component={Favorite} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default connect(mapStateToProps)(FavoritesNavigator);
