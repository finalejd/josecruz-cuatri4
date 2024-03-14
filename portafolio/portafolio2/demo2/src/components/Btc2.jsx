//API INFORMACION DE VALOR DE CRIPTOMONDEAS

/* 
El componente Btc2 se encarga de obtener y mostrar los datos de la API de CoinDesk que 
proporciona información sobre el precio actual de Bitcoin en diferentes monedas.
*/
import { useState, useEffect } from 'react';
import '../App.css';

/* 
Se define la URL de la API con la que extraeremos informacion
*/
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

/*
useEffect Hook: Se utiliza para realizar la solicitud a la API cuando el componente se monta ([] 
como segundo argumento, lo que significa que solo se ejecuta una vez). Una vez que se obtienen 
los datos o se produce un error, se actualizan los estados correspondientes.
*/
export default function Btc2() {
  const[data, SetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

/*
Fetch API: Se utiliza para realizar la solicitud a la URL de la API. Los datos se convierten a formato JSON y 
luego se actualiza el estado de data, isLoading y error según corresponda.
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
Si hay un error, muestra un mensaje de error.
*/
  const getContent = () => {
    if (isLoading) {

/*
Los datos de Bitcoin en las diferentes monedas se muestran en una tabla. Si hay un error, se muestra un mensaje de error. 
Si los datos están cargando, se muestra un indicador de carga.
*/
      return (
        <div className="App">
          <h4>Loading Data ...</h4>
          <progress value={null} />
        </div>
      );
    }
  
    if (error) {
      return <h4>error</h4>
    }

    return (
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
                <td>{data["bpi"]["USD"].rate}</td>
                <td>{data["bpi"]["USD"].rate_float}</td>
                <td>{data["bpi"]["USD"].description}</td>
                <td>{data["time"].updated}</td>
              </tr>
              <tr>
                <td>{data["bpi"]["EUR"].rate}</td>
                <td>{data["bpi"]["EUR"].rate_float}</td>
                <td>{data["bpi"]["EUR"].description}</td>
                <td>{data["time"].updated}</td>
              </tr>
              <tr>
                <td>{data["bpi"]["GBP"].rate}</td>
                <td>{data["bpi"]["GBP"].rate_float}</td>
                <td>{data["bpi"]["GBP"].description}</td>
                <td>{data["time"].updated}</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div class= "col-2">

        </div>
        
      </div>
    );
  }

  console.log(data)

/*
El componente Btc2 es un componente de función de React que devuelve elementos JSX. 
Se utiliza una función getContent para manejar la lógica de renderizado condicional.
*/
  return (
    <div className="App">
      {getContent()}
    </div>
  );

}