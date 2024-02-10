import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'subjects'), where('__name__', '==', '290IaCwEwmioIuxaLjAb'));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          throw new Error('Document not found');
        }
        querySnapshot.forEach((doc) => {
          setData(doc.data());
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null; // Or display a loading spinner, etc.

  return (
    <div>
      <h1>{data.cse}</h1> {/* Render your fetched data here */}
    </div>
  );
};

export default MyComponent;
