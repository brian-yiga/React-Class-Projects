import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState(null);

  async function getPosts() {
    let apiUrl = "https://dummyjson.com/posts";
    let res = await fetch(apiUrl);
    let postsData = await res.json();
    setPosts(postsData.posts);
  }

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts ? posts.map((post)=>(
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            
          </li>
        )):
        <h1>Loading...</h1>
        }
      </ul>
    </div>
  );
};

export default Posts;
