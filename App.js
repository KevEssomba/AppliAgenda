import React, { useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './navigation';
import { Splash } from './pages';

// Pages



export default function App() {
  const queryClient = new QueryClient();
  const [endOfLoading, setEndOfLoading] = useState(false);
  const FAKE_TIME_LOAD = 3000;

  useEffect(() =>{
    setTimeout (()=>{
      setEndOfLoading(true);
    }, FAKE_TIME_LOAD);
  },[])

  
  
  return (
    <QueryClientProvider client={queryClient}>
        <Navigation/> 
    </QueryClientProvider>  
  );
}