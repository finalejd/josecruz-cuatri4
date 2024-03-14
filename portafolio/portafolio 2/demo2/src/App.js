/*
Importa dos componentes de React llamados Btc2 y Post desde los archivos Btc2.js y Post.js ubicados en la carpeta components respectivamente.
*/
import './App.css';
import Btc2 from './components/Btc2';
import Post from './components/Post';

/*
Este componente es la raíz de la aplicación y define la estructura general de la interfaz de usuario.
*/
export default function App() {

  /*
  Renderiza dos componentes dentro del contenedor principal. Estos son los componentes Btc2 y Post importados anteriormente.
  */
  return (

    <div className="App">
      <Btc2 />
      <Post />
    </div>
  );

}

/*
const styles = { ... }: Declara un objeto JavaScript llamado styles, que contiene propiedades para estilos de texto. 
*/
const styles = {
  textProps: {
    alignItems: 'center',
    justifyContent: 'center',
  }
}


