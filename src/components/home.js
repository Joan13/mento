import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesNAvigator from './favorites_navigator';
import HomeNavigator from './home_navigator';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/mapsToProps';

const Tab = createBottomTabNavigator();

class Home extends React.Component {

    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home"
                    component={HomeNavigator}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: "#ff4b2b",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="home" size={20} color={color} />
                        )
                    }}
                />

                <Tab.Screen name="Favorites"
                    component={FavoritesNAvigator}
                    options={{
                        headerShown: false,
                        tabBarActiveTintColor: "#ff4b2b",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="star" size={20} color={color}  />
                        )
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default connect(mapStateToProps)(Home);
