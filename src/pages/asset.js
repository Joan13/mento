import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Asset() {

    const route = useRoute();
    const dispatch = useDispatch();
    const assets = useSelector(state => state.favorites);
    const navigation = useNavigation();

    const add_to_favorites = item => dispatch({ type: "ADD_FAVORITE", payload: item });
    function remove_from_favorites() {
        const items = assets.filter(asset => asset.id !== route.params.item.id);
        dispatch({ type: "SET_FAVORITES", payload: items });
    }

    function filter_favorites(favorite) {
        for (let i in assets) {
            if (assets[i] === favorite) {
                return true;
            }
        }

        return false;
    }

    useEffect(() => {
        navigation.setOptions({ title: route.params.item.title });
    })
    return (
        <ScrollView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.image_container}>
                <Image source={require('./../../assets/icon.png')} style={styles.image_profile} />
            </View>

            {!filter_favorites(route.params.item) ?
                <TouchableOpacity
                    onPress={() => add_to_favorites(route.params.item)}
                >
                    <Text style={styles.favorites}>ADD TO FAVORITES</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={() => remove_from_favorites(route.params.item)}
                >
                    <Text style={styles.favorites}>REMOVE FROM FAVORITES</Text>
                </TouchableOpacity>}

            <View style={styles.texts}>
                <Text style={styles.title}>{route.params.item.title}</Text>
                <Text style={styles.description}>{route.params.item.description}</Text>
            </View>
            <View style={styles.description_view}>
                <Ionicons name='location' size={20} color='gray' />
                <Text style={styles.location}>{route.params.item.location}</Text>
            </View>
        </ScrollView>
    )
    // }
}

const styles = StyleSheet.create({
    image_profile: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    texts: {
        margin: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    description: {
        flex: 1,
        fontSize: 15
    },
    location: {
        flex: 1,
        color: '#003090'
    },
    description_view: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 15
    },
    favorites: {
        color: '#003090',
        textAlign: 'right',
        marginRight: 15,
        marginTop: 15
    }
});

// export default connect(mapStateToProps)(Asset);
