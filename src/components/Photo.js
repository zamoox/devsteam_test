import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'native-base'; 

const Photo = ({ photo, goToPhoto }) => {

    const { urls } = photo;
    const name = photo.name ? photo.name : '( unnamed )';
    const author = photo.author ? photo.author : '( no author )'; 

    return (
        <>
            <TouchableOpacity
                style={styles.container}
                onPress={() => goToPhoto(photo)} 
            >
                <View style={styles.imageContainer}>
                    <Image
                        style = {styles.imageStyle}
                        source={{ uri: urls?.regular } }
                    />
                </View>
                <View style={styles.imageInfo}>
                    <Text style={styles.headerText}>{name}</Text>    
                    <Text style={styles.plainText}> 
                        <Icon name='person' style={styles.icon}/>  { author }
                    </Text>
                </View>
            </TouchableOpacity>        
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    imageContainer: {
        borderColor: 'orange',
        height: 250,
    },
    imageStyle: {
        width: 200, 
        height: '100%' 
    },
    imageInfo: {
        width: '45%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerText: {
        fontSize: 13,
        textTransform: 'uppercase'
    },
    plainText: {
        fontSize: 12,
        paddingTop: 10,
    },
    icon: {
        fontSize: 14,
        color: '#6495ED'
    }
})

export default Photo;