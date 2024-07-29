import React from 'react';

const Blog = () => {
  return (
    <div style={styles.container}>
      <section style={styles.articles}>
        <h2>Articles</h2>
        {/* Add blog post titles, excerpts, and read more links here */}
      </section>
      <section style={styles.categories}>
        <h2>Categories</h2>
        {/* Add category filters here */}
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
  },
  articles: {
    marginBottom: '30px',
  },
  categories: {
    marginBottom: '30px',
  },
};

export default Blog;
