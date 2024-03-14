/*
Se importa los componentens de React, y de la tabla que esta dentro del archivo DataTable.jsx
*/
import React from 'react';
import DataTableComponent from './components/DataTable';

const App = () => {
  return (
    <div>
      <h1>MY Zombi Api React</h1>

/*
Aqui se manda a llamar el componente DataTableComponent que se importo previamente al inicio del documento
*/
      <DataTableComponent/>
    </div>
  );
};

export default App;