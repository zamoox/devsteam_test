import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PhotoScreen = ({ navigation }) => {

    const { name, author, urls } = navigation.getParam('photo');

    return ( 
        <View style={styles.container}>
            <Image
                style = {{width: '100%', height: '100%' }}
                source={{ uri: urls?.full } }
            />
            <View style={styles.infoContainer}>
                <Text style={styles.nameStyle}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    infoContainer: {
        position: 'absolute',
        width:'100%',
        height: 65,
        bottom:0,
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    nameStyle: {
        color: 'white',
        textTransform:'uppercase',
        fontSize: 12,
        padding: 5,
        
    },
})


export default PhotoScreen;