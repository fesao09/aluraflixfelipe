import React, { useState } from 'react';
import { FormWrapper, FormGroup, FormLabel, FormInput, FormTextArea, FormSelect, FormButton, FormActions } from './Form.styles';

const Form = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = { title, category, image, video, description };
    onSave(newVideo); // Chama a função onSave passando o novo vídeo
  };

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor="title">Título</FormLabel>
        <FormInput 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Digite o título do vídeo"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="category">Categoria</FormLabel>
        <FormSelect 
          id="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Ação">Ação</option>
          <option value="Comédia">Comédia</option>
          <option value="Suspense">Suspense</option>
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="image">Imagem</FormLabel>
        <FormInput 
          type="text" 
          id="image" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          placeholder="Insira o link da imagem"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="video">Vídeo</FormLabel>
        <FormInput 
          type="text" 
          id="video" 
          value={video} 
          onChange={(e) => setVideo(e.target.value)} 
          placeholder="Insira o link do vídeo"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="description">Descrição</FormLabel>
        <FormTextArea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Escreva uma descrição para o vídeo"
        />
      </FormGroup>

      <FormActions>
        <FormButton type="submit">Salvar</FormButton>
        <FormButton type="button" onClick={handleReset}>Limpar</FormButton>
      </FormActions>
    </FormWrapper>
  );
};

export default Form;
