import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import TermPage from './components/TermPage'
import Dispatcher from './components/Dispatcher';
import { useDbData } from './utilities/firebase';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const Main = () => {
  const [data, error] = useDbData("/");

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (data === undefined) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  return (<div>
    <Banner title = {data.title}/>
    <Dispatcher courses = {data.courses} />
    </div>)
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <Main/>
      </div>
      </QueryClientProvider>
  );
};

export default App;
