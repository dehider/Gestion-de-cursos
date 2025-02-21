import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Docentes = ({ refresh }) => {
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/docentes')
      .then(response => response.json())
      .then(data => setDocentes(data));
  }, [refresh]); // Se ejecuta cuando cambia refresh

  return (
    <div className="container">
      <h2 className="mt-3">Lista de Docentes</h2>
      <ul className="list-group mt-3">
        {docentes.map(docente => (
          <li key={docente.id} className="list-group-item">
            <strong>{docente.nombre}</strong> - {docente.documento} - {docente.correo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Docentes;
