import React, { useState, useEffect } from 'react';
import Filtros from './Filtros';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cursos = ({ refresh }) => {
  const [cursos, setCursos] = useState([]);
  const [filteredCursos, setFilteredCursos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cursos')
      .then(response => response.json())
      .then(data => {
        setCursos(data);
        setFilteredCursos(data);
      });
  }, [refresh]); // Se ejecuta cuando cambia refresh

  return (
    <div className="container">
      <h2 className="mt-3">Lista de Cursos</h2>
      <Filtros onFiltrar={(filtros) => { /* Filtrado aquí */ }} />
      <ul className="list-group mt-3">
        {filteredCursos.map(curso => (
          <li key={curso.id} className="list-group-item">
            <strong>{curso.nombre}</strong> - {curso.duracion} semanas - ${curso.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cursos;
