
const initialState = {
    data: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PHOTOS_LOADED':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case 'PHOTOS_LOADING':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'PHOTOS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }            
        default: 
            return state;
    }
}

export default reducer;