import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firestore  from '../firebase';
import styled from ''

function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        firestore
        .collection('posts')
        .get()
        .then((snapshot)=>{
            const posts = snapshot.docs.map((doc) => {
                return {
                    id : doc.id,
                    ...doc.data()
                };
            });
            console.log('posts', posts);
            setPosts(posts);
        });
    }, []);

    return <div className="Home">
        <h1 style={styles.heading}>Tech Blog</h1>
        <button className='createPostBtn'>This is a button</button>
        <div id="blog-by">Jitu</div>
        {posts.map((post, index) => (
            <div className="post" key={`post-${index}`}>
                <Link to={`/post/${post.id}`}>
                    <h3>{post.title}</h3>
                </Link>
                <p>{post.subTitle}</p>
            </div>
        ))}
    </div>;
} 
export default Home;
const styles = {
    heading: {
        marginTop: 30,
        fontSize: 56
    }
}
  