import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .tarea-input{
    width: 350px;
    font-size: 18px;
    background-color: white;
    color: black;
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #00471b;
    outline: none;
  }

  .tarea-boton{
    padding: 16px;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background-color: #00471b;
    color: white;
    text-transform: capitalize;
  }
`;

const TareaFormulario = (props:any) => {

  const [input, setInput] = useState('');

  const manejarCambio = (ev:any) => {
    setInput(ev.target.value);
  }

  const manejarEnvio = (ev:any) => {
    ev.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }

    return (
        <StyledForm
          onSubmit={manejarEnvio}>
          <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
          />
          <button className='tarea-boton'>
            Agregar tarea
          </button>
        </StyledForm>
    )
}

export default TareaFormulario
