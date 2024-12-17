// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoDetails from './components/VideoDetails';
import Categorias from './components/Categorias';
import { CorProvider } from './Contexto/CorContexto';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <CorProvider>
        <div className="App">
          <Header />
          <SearchBar />
          <Routes>
            <Route path="/" element={ 
              <>
                <Banner />
                <Categorias /> 
              </>
            } />
            <Route path="/videos/:id" element={<VideoDetails />} />
          </Routes>
          <Footer />
        </div>
    </CorProvider>
  );
}

export default App;