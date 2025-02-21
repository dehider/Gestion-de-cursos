import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filtros = ({ onFiltrar }) => {
  const [nombre, setNombre] = useState('');
  const [duracion, setDuracion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleFiltrar = () => {
    onFiltrar({ nombre, duracion, precio });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <input className="form-control" type="text" placeholder="Buscar por nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="col-md-4">
          <input className="form-control" type="number" placeholder="Duración mínima" value={duracion} onChange={(e) => setDuracion(e.target.value)} />
        </div>
        <div className="col-md-4">
          <input className="form-control" type="number" placeholder="Precio máximo" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleFiltrar}>Filtrar</button>
    </div>
  );
};

export default Filtros;
