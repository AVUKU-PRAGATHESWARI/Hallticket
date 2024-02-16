import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'subjects'), where('__name__', '==', 'CSE'));
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
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null; // Or display a loading spinner, etc.
  const dataArray = data.sem1;

  return (
    <div>
      <ul>
        {dataArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
       {/* Render your fetched data here */}
    </div>
  );
};

export default MyComponent;
