// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoDetails from './components/VideoDetails';
import Categorias from './components/Categorias';
import { CorProvider } from './Contexto/CorContexto'; // Caminho atualizado para a nova estrutura
import { MyProvider } from './context'; // Caminho atualizado para a nova estrutura
import SearchBar from './components/SearchBar';

function App() {
  return (
    <MyProvider> {/* Adicionado ao contexto */}
      <CorProvider> {/* Mantido o contexto original */}
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
    </MyProvider>
  );
}

export default App;

