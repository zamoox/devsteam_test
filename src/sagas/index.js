import { put, takeEvery, call } from 'redux-saga/effects';
import { photosLoaded, photosLoading, photosError, FETCH_PHOTOS } from '../actions';
import DataTransform from '../utils/DataTransform';

const obj = new DataTransform();

const fetchImagesFromApi = () => 
    fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0");

function* fetchImageWorker() {
    try {
        yield put(photosLoading());
        const data = yield call(fetchImagesFromApi)
        const json = yield call (() => new Promise(res => res(data.json()) ));
        const res = yield obj.transformDataArray(json);
        yield put(photosLoaded(res));
        
    } 
    catch(error) {
        yield put(photosError(error))
    }
} 

function* imageWatcher() {
    yield takeEvery(FETCH_PHOTOS, fetchImageWorker)
}

export {
    imageWatcher
}