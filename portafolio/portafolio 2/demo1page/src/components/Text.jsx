/*
Este es un componente de función de React que representa un párrafo de texto.
Toma un objeto props como argumento. El texto del párrafo se espera que esté en la propiedad p de las props.
*/
export default function Text(props) {
    return (
        <p style={styles.colorText}>{props.p}</p>
    )
}

/*
Define un objeto styles que contiene los estilos CSS para el componente Text.

colorText: Establece el color del texto en "lightgreen", la alineación del texto a la izquierda, 
el tamaño de fuente en 64 píxeles y la fuente en "Roboto, Helvetica".
*/
const styles = {
    colorText: {
        color: "red",
        textAlign: "center",
        fontSize: 64,
        fontFamily: "Arial",
    },
};

