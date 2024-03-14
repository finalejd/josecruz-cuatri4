/*
El componente importa las funciones useState y useEffect de React, así como los módulos axios para hacer solicitudes HTTP y 
react-data-table-component para mostrar los datos en una tabla.
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component'


/*
Esta es la función del componente. Define un estado para almacenar los datos de la API utilizando el hook useState. 
Luego, utiliza el hook useEffect para realizar una solicitud a la API cuando el componente se monta por primera vez. 
Cuando se reciben los datos, se almacenan en el estado.
*/
const DataTableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Llamada a la API utilizando Axios
    axios.get('https://pvz-2-api.vercel.app/api/zombies/basic%20zombie')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


/*
Define las columnas que se mostrarán en la tabla. Cada objeto en el array columns representa una columna y
tiene dos propiedades: name (nombre de la columna) y selector (el nombre de la clave en los datos que corresponde a esta columna).
*/
  const columns = [
    { name: 'Name zombie', selector: 'name'},
    { speed: 'Speed', selector: 'speed'},
    { stamina: 'Stamina', selector: 'stamina'},
    { description: 'Description', selector: 'description'},

    // Agrega más columnas según tu API
  ];

/*
Dentro del componente, hay un título <h2> y luego se utiliza el componente DataTable proporcionado por react-data-table-component. 
Se pasan las columnas definidas y los datos obtenidos de la API como propiedades al componente DataTable. 
Además, se habilitan la paginación, la selección de filas, el resaltado al pasar el cursor y la capacidad de respuesta.
*/
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

/*
El componente DataTableComponent se exporta para que pueda ser utilizado en otras partes de la aplicación.
*/
export default DataTableComponent;