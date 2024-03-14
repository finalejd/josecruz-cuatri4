/*
 El código comienza importando las funciones useState y useEffect de React, y también importa el archivo CSS App.css. 
 Luego define el estado inicial usando el hook useState para almacenar los datos de la API, el estado de carga y los errores.
*/
import { useState, useEffect } from 'react';
import './App.css';

/*
Se define la URL de la API de CoinDesk que se utilizará para obtener los datos del precio actual de Bitcoin en diferentes monedas.
*/
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"


function App() {
  const[data, SetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

/*
useEffect: Se utiliza para realizar una solicitud a la API de CoinDesk cuando el componente se monta por primera vez. 
Actualiza el estado según el resultado de la solicitud.
*/
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        SetData(result);
      }, error => {
        setIsLoading(false);
        setError(error);
      })
  },[]);

/*
getContent: Esta función determina qué contenido mostrar en función del estado actual de la aplicación.
*/
  const getContent = () => {
    if (isLoading) {
      return (
        <div className="App">
          <h4>Loading Data ...</h4>
          <progress value={null} />
        </div>
      );
    }
  
/*
Error: Si hay un error, muestra un mensaje de error.
*/
    if (error) {
      return <h4>error</h4>
    }

  
/*
Dentro de este return, se encuentra la tabla en donde se mostrara la informacion que recoja de la api.
Estara dividida entre secciones utilizando las etiquetas "th" y "tr", donde se mostrara los datos.
*/
    return (


//Se declara un contenedor llamado "App" para que se visualize correctamente la tabla de los datos.
      <div className="App">
        <h1>BTC to USD |EUR |GBP</h1>
        <h3>BTC to USD</h3>


        <div class = "col-2">

        </div>


        <div class = "col-8">
          <table class = 'table table-striped'>
            <thead>
              <th>RATE</th>
              <th>RATE FLOAT</th>
              <th>DESCRIPTION</th>
              <th>UPDATE</th>
            </thead>
            <tbody>
              <tr>
                data.forEach{element}  
                <td>{element.id}</td>
                <td>{element.userId}</td>
                <td>{element.title}</td>
                <td>{element.body}</td>
              </tr>
                ;
              <tr>
                <td>{data["bpi"]["EUR"].rate}</td>
                <td>{data["bpi"]["EUR"].rate_float}</td>
                <td>{data["bpi"]["EUR"].description}</td>
                <td>{data["time"].update}</td>
              </tr>
              <tr>
                <td>{data["bpi"]["GBP"].rate}</td>
                <td>{data["bpi"]["GBP"].rate_float}</td>
                <td>{data["bpi"]["GBP"].description}</td>
                <td>{data["time"].update}</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div class= "col-2">

        </div>
        
      </div>
    );
  }

  //este console.log muestra un mensaje desde la terminal del navegador de internet que estemos utilizando.
  console.log(data)


  /*
  Se renderiza el contenido devuelto por la función getContent.
  */
  return (
    <div className="App">
      {getContent()}
    </div>
  );

}


/*
const styles = {
  textProps: {
    alignItems: 'center',
    justifyContent: 'center',
  }
}
*/

//con esto, la aplicacion App, se exporta para que este componente pueda ser utilzado en otro componente on el app.js
export default App;
