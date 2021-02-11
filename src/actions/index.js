
export const PHOTOS_LOADED = 'PHOTOS_LOADED';
export const PHOTOS_LOADING = 'PHOTOS_LOADING';
export const PHOTOS_ERROR = 'PHOTOS_ERROR';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

const photosLoaded = (photos) => {
    return {
        type: PHOTOS_LOADED,
        payload: photos
    }
}

const photosLoading = () => {
    return {
        type: PHOTOS_LOADING,
    }
}

const photosError = (error) => {
    return {
        type: PHOTOS_ERROR,
        payload: error
    }
}

const fetchPhotos = () => {
    return {
        type: FETCH_PHOTOS
    }
}

export {
    photosLoaded,
    photosLoading,
    photosError,
    fetchPhotos
};