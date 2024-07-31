import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="container">
      <section className="articles">
        <h2>Articles</h2>
        {/* Add blog post titles, excerpts, and read more links here */}
      </section>
      <section className="categories">
        <h2>Categories</h2>
        {/* Add category filters here */}
      </section>
    </div>
  );
};

export default Blog;
