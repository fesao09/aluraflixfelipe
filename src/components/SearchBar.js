// src/components/SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background-color: #2a7ae4;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #195ba1;
  }
`;

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implementar a lógica de busca aqui
    console.log('Pesquisando por:', searchTerm);
  };

  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
}

export default SearchBar;