/*
Esto importa un archivo de imagen llamado logo.svg ubicado en el directorio anterior al directorio actual. 
La imagen se asigna a la variable logo. La ruta al archivo puede variar según la estructura de tu proyecto.
*/
import logo from '../logo.svg';

/*
Define una función de componente de React llamada Cabecera y la exporta como la exportación predeterminada del archivo. 
Esto significa que cuando este archivo se importe en otro archivo, este componente estará disponible como la 
exportación predeterminada.
*/
export default function Cabecera() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello wordls
      </p>
      aprende react
    </header>
  );
}