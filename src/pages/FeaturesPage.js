import React from 'react';

const FeaturesPage = () => {
  return (
    <div style={styles.container}>
      <section style={styles.features}>
        <h2>Detailed Features</h2>
        {/* Add detailed feature descriptions and screenshots here */}
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
  },
  features: {
    marginBottom: '30px',
  },
};

export default FeaturesPage;
