import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/mapsToProps';

class Asset extends React.Component {

    constructor(props) {
        super(props);

        this.add_to_favorites = this.add_to_favorites.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: this.props.route.params.item.title });
    }

    add_to_favorites() {
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: this.props.route.params.item });
    }

    remove_from_favorites() {
        const array = this.props.favorites.filter(asset => asset.id !== this.props.route.params.item.id);
        this.props.dispatch({ type: 'SET_FAVORITES', payload: array });
    }

    filter_favorites(favorite) {
        for (let i in this.props.favorites) {
            if (this.props.favorites[i] === favorite) {
                return true;
            } else {
                return false;
            }
        }
    }

    render() {
        return (
            <ScrollView>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={styles.image_container}>
                    <Image source={require('./../../assets/icon.png')} style={styles.image_profile} />
                </View>

                {!this.filter_favorites(this.props.route.params.item) ?
                    <TouchableOpacity
                        onPress={() => this.add_to_favorites()}>
                        <Text style={styles.favorites}>ADD TO FAVORITES</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={() => this.remove_from_favorites()}>
                        <Text style={styles.favorites}>REMOVE FROM FAVORITES</Text>
                    </TouchableOpacity>
                }


                <View style={styles.texts}>
                    <Text style={styles.title}>{this.props.route.params.item.title}</Text>
                    <Text style={styles.description}>{this.props.route.params.item.description}</Text>
                </View>
                <View style={styles.description_view}>
                    <Ionicons name='location' size={20} color='gray' />
                    <Text style={styles.location}>{this.props.route.params.item.location}</Text>
                </View>
            </ScrollView>
        )
    }
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

export default connect(mapStateToProps)(Asset);
