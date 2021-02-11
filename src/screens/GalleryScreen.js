import React from 'react';
import PhotoList from '../components/PhotoList'

const GalleryScreen = ({ navigation }) => {

    const goToPhoto = (photo) => {
        navigation.navigate('Photo', { photo })
    }
    
    return (
        <>
            <PhotoList 
                goToPhoto={goToPhoto}    
            />
        </>
    )
}



export default GalleryScreen;