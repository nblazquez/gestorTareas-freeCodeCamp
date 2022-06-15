import React from 'react';
import styled from 'styled-components';
import logo from '../imagenes/FreeCodeCamp_logo.png';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  img {
    width: 400px;
    height: 40px;
  }
`;

const Logo = () => {
    return (
        <StyledDiv>
            <img 
                src={logo} 
                alt="Logo de freeCodeCamp" />
        </StyledDiv>
    )
}

export default Logo
