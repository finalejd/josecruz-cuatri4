/*
Este es un componente de función de React que muestra un mensaje de bienvenida personalizado.
Toma un objeto props como argumento. Se espera que las props contengan dos valores: name y msg, 
que se utilizarán para personalizar el mensaje de bienvenida.
*/
export default function Welcome(props) {
    return (
        <p style={stylesfont.colorText}> MLP {props.name} :D{props.msg}</p>
    );
}

/*
Define un objeto stylesfont que contiene los estilos CSS para el componente Welcome.

colorText: Establece el tamaño de fuente en 80 píxeles.
*/
const stylesfont = {
    colorText: {
        fontSize: 90,
    },
};
