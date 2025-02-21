import React, { useState } from 'react';

const CursoForm = ({ onCursoAgregado }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [duracion, setDuracion] = useState('');
  const [precio, setPrecio] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoCurso = {
      nombre,
      descripcion,
      duracion: Number(duracion),
      precio: Number(precio),
      fechaInicio
    };

    const response = await fetch('http://localhost:5000/cursos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoCurso),
    });

    if (response.ok) {
      console.log("Curso guardado con éxito");
      setNombre('');
      setDescripcion('');
      setDuracion('');
      setPrecio('');
      setFechaInicio('');
      onCursoAgregado(); // Llama a la función para actualizar la lista de cursos
    } else {
      console.error("Error al guardar el curso");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Agregar Curso</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del curso</label>
          <input className="form-control" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input className="form-control" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Duración (semanas)</label>
          <input className="form-control" type="number" value={duracion} onChange={(e) => setDuracion(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input className="form-control" type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Inicio</label>
          <input className="form-control" type="datetime-local" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success">Agregar Curso</button>
      </form>
    </div>
  );
};

export default CursoForm;
