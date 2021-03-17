import {useState, useEffect} from 'react';
import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {

    const {data:blogs, isPending, error} = useFetch("http://jsonplaceholder.typicode.com/posts");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Just a moment.....</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
            
        </div> 

    );
}
 
export default Home;