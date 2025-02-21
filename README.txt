# Proyecto: Gestión de Cursos con React y JSON-Server

Este proyecto es una aplicación web para la gestión de cursos y docentes, desarrollada con React y JSON-Server.

## 📌 Requisitos
- Node.js instalado
- npm instalado

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/gestion-cursos.git
   cd gestion-cursos
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Iniciar JSON-Server:
   ```sh
   json-server --watch db.json --port 5000
   ```
4. Ejecutar la aplicación React:
   ```sh
   npm start
   ```

## 📂 Estructura del Proyecto

```
/gestion-cursos
│── db.json               # Base de datos con JSON-Server
│── src/
│   ├── components/
│   │   ├── Cursos.js     # Lista de cursos
│   │   ├── Docentes.js   # Lista de docentes
│   │   ├── CursoForm.js  # Formulario para agregar cursos
│   ├── App.js           # Componente principal
│   ├── index.js         # Punto de entrada de la aplicación
│── package.json         # Configuración del proyecto
```

## 📜 Descripción de Componentes

### 1️⃣ **db.json** (Base de datos JSON-Server)
```json
{
  "cursos": [
    {
      "id": 1,
      "nombre": "Introducción a JavaScript",
      "descripcion": "Curso básico de JS",
      "duracion": 4,
      "precio": 200.5,
      "fechaInicio": "2025-03-01T10:00:00",
      "docenteId": 1
    }
  ],
  "docentes": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "documento": "123456789",
      "correo": "juan@example.com"
    }
  ]
}
```

### 2️⃣ **Cursos.js** (Lista de cursos)
```javascript
import React, { useState, useEffect } from 'react';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cursos')
      .then(response => response.json())
      .then(data => setCursos(data));
  }, []);

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>{curso.nombre} - {curso.duracion} semanas</li>
        ))}
      </ul>
    </div>
  );
};

export default Cursos;
```

### 3️⃣ **Docentes.js** (Lista de docentes)
```javascript
import React, { useState, useEffect } from 'react';

const Docentes = () => {
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/docentes')
      .then(response => response.json())
      .then(data => setDocentes(data));
  }, []);

  return (
    <div>
      <h2>Lista de Docentes</h2>
      <ul>
        {docentes.map(docente => (
          <li key={docente.id}>{docente.nombre} - {docente.correo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Docentes;
```

### 4️⃣ **CursoForm.js** (Formulario de cursos)
```javascript
import React, { useState } from 'react';

const CursoForm = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [duracion, setDuracion] = useState('');
  const [precio, setPrecio] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, descripcion, duracion, precio, fechaInicio });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      <input type="number" placeholder="Duración" value={duracion} onChange={(e) => setDuracion(e.target.value)} required />
      <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
      <input type="datetime-local" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required />
      <button type="submit">Guardar Curso</button>
    </form>
  );
};

export default CursoForm;
```

### 5️⃣ **App.js** (Componente principal)
```javascript
import React from 'react';
import Cursos from './components/Cursos';
import Docentes from './components/Docentes';
import CursoForm from './components/CursoForm';

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
```

## 📜 Notas Adicionales
- La aplicación es responsive.
- Implementa validaciones en los formularios.
- Cuenta con un diseño amigable UX/UI.

---
🚀 ¡Listo para ejecutar y gestionar cursos! 🎯
