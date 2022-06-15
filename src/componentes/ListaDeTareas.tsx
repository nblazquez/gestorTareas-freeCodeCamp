import { useState } from 'react';
import styled from 'styled-components';
import Tarea from './Tarea';
import TareaFormulario from './TareaFormulario';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
`;

const ListaDeTareas = () => {

  /*Establecer objeto Tarea para facilitar el tipado*/
  interface Tarea {
    id: string,
    texto: string,
    completada: Boolean
  };

  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregarTarea = (tarea:Tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas : Tarea[] = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id:string) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id:string) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

    return (
      <>
        <TareaFormulario
          onSubmit={agregarTarea}
        />
        <StyledDiv>
          {
            tareas.map((tarea:any) => 
              <Tarea
                key={tarea.id} //Identifica de forma única
                id={tarea.id} //No se puede acceder al key directamente en el componente, pasamos el id
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
              />
            )
          }
        </StyledDiv>
      </>
    )
}

export default ListaDeTareas
