import React, { useState } from 'react';

const DocenteForm = ({ onDocenteAgregado }) => {
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoDocente = {
      nombre,
      documento,
      correo
    };

    const response = await fetch('http://localhost:5000/docentes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoDocente),
    });

    if (response.ok) {
      console.log("Docente guardado con éxito");
      setNombre('');
      setDocumento('');
      setCorreo('');
      onDocenteAgregado(); // Llama a la función para actualizar la lista de docentes
    } else {
      console.error("Error al guardar el docente");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Agregar Docente</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Documento</label>
          <input className="form-control" type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input className="form-control" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">Agregar Docente</button>
      </form>
    </div>
  );
};

export default DocenteForm;
