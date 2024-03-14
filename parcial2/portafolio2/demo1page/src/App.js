/*Importa varios componentes de React desde archivos locales en el directorio components.*/
import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import Text from './components/Text';
import Table3x3 from './components/Table3x3';
import Form from './components/Form';

import Header from './components/Header';
import Carrusel from './components/Carrusel';
import Cards from './components/Cards';
import Footer from './components/Footer';

/*
App() es una función que define el componente principal de la aplicación.
Devuelve una estructura de elementos JSX que representa la interfaz de usuario de la aplicación.
Incluye componentes como Header, CarouselDefault, Cards, Welcome, Text, Image, Table3x3, Form, y Footer, junto con algunas props personalizadas.
*/
function App() {
  return (

    <div>
      <Header/>
      <Carrusel/>
      <br/>
      <Cards/>
      <Welcome name="Bienvenido planta/zombi" />
      <Welcome msg="Unete a la revelion" />
      <Text p="" />
      <Table3x3 th1={1} th2={2} th3={3} />
      <Form />
      <Footer />
    </div>
  );

}

//Exporta el componente App como la exportación predeterminada del archivo.
export default App;
