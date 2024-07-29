import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      const querySnapshot = await getDocs(collection(db, 'subscribers'));
      const subscribersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setSubscribers(subscribersList);
    };

    fetchSubscribers();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Subscribers</h2>
      <ul style={styles.list}>
        {subscribers.map((subscriber) => (
          <li key={subscriber.id} style={styles.listItem}>
            {subscriber.email} - {new Date(subscriber.timestamp.seconds * 1000).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    width: '80%',
    margin: '0 auto',
    textAlign: 'center'
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
};

export default SubscriberList;
