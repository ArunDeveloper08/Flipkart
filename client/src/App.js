
import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import DataProvider from './context/DataProvider';
import Cart from './component/cart/Cart';
import { BrowserRouter, Routes,Route } from "react-router-dom"
import { useEffect } from 'react';


import { Box } from '@mui/material';
import DetailsView from './component/details/DetailsView';

function App() {
  useEffect(() => {
    const clearLocalStorageOnUnload = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', clearLocalStorageOnUnload);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorageOnUnload);
    };
  }, []);
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "54px" }}>
          <Routes>
          <Route path="/" element={ <Home />}/> 
          <Route path="/cart" element={ <Cart />}/> 
          <Route path='/product/:id' element={<DetailsView />}/> 
        
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
