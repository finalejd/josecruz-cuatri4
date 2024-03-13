import { useState, useEffect } from 'react';
import './App.css';

const url = "https://api.coindesk.com/v1/bpi/currentprice.json"


function App() {
  const[data, SetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const getContent = () => {
    if (isLoading) {
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

  console.log(data)

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

export default App;
