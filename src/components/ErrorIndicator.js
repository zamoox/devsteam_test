import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

const ErrorIndicator = () => 
    <View style={styles.errorContainer}>
        <Text style={styles.errorText}> There is some technical working. </Text>
        <Text style={styles.errorText}> Chill out and have some pizza! </Text>
        <Icon style={styles.errorIconStyle} name='pizza' />
    </View>


const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },
    errorIconStyle: {
        paddingTop: 10,
        fontSize: 50,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'red'   
    } 
})    

export default ErrorIndicator;