import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/Blogpage.css';

function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div className="blog-posts" style={{textAlign:"center"}}>
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>Loading blog posts...</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt={post.title}
                className="post-image"
              />
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default BlogPosts;
