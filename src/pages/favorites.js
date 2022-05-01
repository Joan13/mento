import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/mapsToProps';

class Favorites extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: 'Favorites' });
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('favorite', { item })}
            >
                <View style={styles.item_view}>
                    <Image source={require('./../../assets/icon.png')} style={styles.image_profile} />
                    <View style={styles.text_view}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <View style={styles.description_view}>
                            <Ionicons name='location' size={20} color='gray' />
                            <Text style={styles.location}>{item.location}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>);
    };


    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <FlatList
                    numColumns={1}
                    data={this.props.favorites}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1
    },
    image_profile: {
        width: 50,
        height: 50,
        marginLeft: 15,
        marginRight: 10,
        borderRadius: 40
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
        marginTop: 10
    },
    item_view: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    text_view: {
        flex: 1
    }
})

export default connect(mapStateToProps)(Favorites);
