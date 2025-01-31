import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();

  async function getPost() {
    let apiUrl = `https://dummyjson.com/posts/${id}`;
    let res = await fetch(apiUrl);
    let postsData = await res.json();
    setPost(postsData);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default PostPage;
