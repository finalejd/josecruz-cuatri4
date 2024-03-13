import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component'

const DataTableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Llamada a la API utilizando Axios
    axios.get('https://pvz-2-api.vercel.app/api/zombies/basic%20zombie')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const columns = [
    { name: 'Name zombie', selector: 'name'},
    { speed: 'Speed', selector: 'speed'},
    { stamina: 'Stamina', selector: 'stamina'},
    { description: 'Description', selector: 'description'},

    // Agrega más columnas según tu API
  ];

  return (
    <div>
      <h2>ZoMbIe iNfO</h2>
      <DataTable
        columns={columns}
        data={data}
        pagination
        selectableRows
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default DataTableComponent;