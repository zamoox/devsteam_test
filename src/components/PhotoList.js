import React from 'react';
import { FlatList } from 'react-native';
import  { fetchPhotos } from '../actions/';
import withData from '../hoc/withData';
import Photo from './Photo';

const PhotoList = ({ data, goToPhoto }) => {

    return (
        <>
        <FlatList 
            data= { data }
            renderItem={({ item }) => 
                <Photo
                    photo={item}
                    goToPhoto={ goToPhoto }
                />
            }
            keyExtractor={item => item.id}
        />
    </>
    );
}

export default withData(PhotoList, fetchPhotos);