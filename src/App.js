import React from 'react';
import Cursos from './components/Cursos';
import Docentes from './components/Docentes';
import CursoForm from './components/CursoForm';
import Filtros from './components/Filtros';
import DocenteForm from './components/DocenteForm';
import Docentes from './components/Docentes';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <h1>Gestión de Cursos</h1>
      <CursoForm onSubmit={(curso) => console.log('Curso guardado:', curso)} />
      <Cursos />
      <Docentes />
    </div>
  );
}

export default App;
