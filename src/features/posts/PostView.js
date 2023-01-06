import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from './postsSlice';
const PostView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    console.log(posts);
    if(isLoading) return <h1>Loading...</h1>;
    if(error) return <h1 style={{"color":"red"}}>{error.message }</h1>;
    if(posts){
        return <>
            {
                posts.map(post => <h1 key={post.id}>{ post.title }</h1>)
            }
        </>
    }
}

export default PostView;