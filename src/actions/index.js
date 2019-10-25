import jsonPlaceholder from '../apis/jsonPlaceholder';
//Action creator - redux-thunk
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        console.log(response);

        dispatch ({
            type: 'FETCH_POSTS',
            payload: response
        });
};
/* cannot use async .. await
export const fetchPosts = async() => {

    // bad approach: Actions must be plain object. 
    Use custom middleware for async actions
    const response = await jsonPlaceholder.get('/posts');
    console.log(response);

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};
*/