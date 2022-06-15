import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const StyledDiv = styled.div<{completada:boolean}>`
  width: 500px;
  min-height: 65px;
  margin: 5px 0;
  padding: 8px 15px 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  border: 1px solid white;
  cursor: pointer;

  /*Tarea completada*/
  text-decoration: ${props => props.completada ? 'line-through' : 'none'};

  /*Degradado de colores*/
  :nth-child(3n +1){
    background-color: ${props => props.completada ? '#5a01a7' : '#1b1b32'};
  }
  :nth-child(3n +2){
    background-color: ${props => props.completada ? '#5a01a7' : '#2a2a40'};
  }
  :nth-child(3n +3){
    background-color: ${props => props.completada ? '#5a01a7' : '#3b3b4f'};
  }


  .tarea-texto{
    width: 100%;
    height: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    overflow-wrap: anywhere;
  }

  .tarea-icono{
    width: 25px;
    height: 25px;
    margin: 5px;
  }

`;

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }:any) => {
    return (
        <StyledDiv 
          completada={completada}
          id={id}>
            <div 
              className='tarea-texto'
              onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div 
              className='tarea-contenedor-iconos'
              onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono'/>
            </div>
        </StyledDiv>
    )
}

export default Tarea
