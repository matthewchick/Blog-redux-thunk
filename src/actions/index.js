import jsonPlaceholder from '../apis/jsonPlaceholder';
//Action creator
export const fetchPosts = async() => {

    // bad approach: Actions must be plain object. Use custom middleware for async actions
    const response = await jsonPlaceholder.get('/posts');
    console.log(response);

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};