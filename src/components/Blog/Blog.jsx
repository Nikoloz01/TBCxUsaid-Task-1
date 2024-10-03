import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' },
    { title: 'Third Post', content: 'This is the content of the third post.' },
  ];

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <ul className="blog-list">
        {posts.map((post, index) => (
          <li key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
