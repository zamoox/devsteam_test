import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'native-base';
import ErrorIndicator from '../components/ErrorIndicator';

const withData = (ViewComponent, getDataAction) => (props) => {
    
    const data = useSelector(state => state.data)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAction())
    },[])

    const isLoading = loading ? <Spinner/> : null;
    const isError = error ? <ErrorIndicator/> : null;
    const content = !loading && !error ? <ViewComponent data={data} {...props}/>: null;
    
    return (
        <>
            { isError }
            { isLoading }
            { content }
        </>
    );
}

export default withData;
    