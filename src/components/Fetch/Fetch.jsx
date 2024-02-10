import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyB5WxF1KGyrIIYuFK4K6dpy4LGl4Dv26l8",
        authDomain: "hallticket-2dd4e.firebaseapp.com",
        projectId: "hallticket-2dd4e",
        storageBucket: "hallticket-2dd4e.appspot.com",
        messagingSenderId: "793240440468",
        appId: "1:793240440468:web:5d12b5774130b16954ee81",
        measurementId: "G-PJ8WX089KY"      
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(firestore, 'subjects'), where('__name__', '==', '290IaCwEwmioIuxaLjAb'));
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
  }, [firestore]); // Run only once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data) console.log(data)
  if (!data) return null; // Or display a loading spinner, etc.

  return (
    <div>
        <h1>{data.cse}</h1>{/* Render your fetched data here */}
      {/* Example: <p>{data.someField}</p> */}
    </div>
  );
};

export default MyComponent;
