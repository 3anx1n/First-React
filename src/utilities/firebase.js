import { initializeApp } from 'firebase/app';
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDuKB_ZIEBqtcOJJ9UmWvDdl7nfBMhQXLQ",
  authDomain: "first-react-70c36.firebaseapp.com",
  databaseURL: "https://first-react-70c36-default-rtdb.firebaseio.com",
  projectId: "first-react-70c36",
  storageBucket: "first-react-70c36.appspot.com",
  messagingSenderId: "744511804717",
  appId: "1:744511804717:web:baeafabcb38c07d5e36fa4",
  measurementId: "G-9DDLFF5NEP"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

