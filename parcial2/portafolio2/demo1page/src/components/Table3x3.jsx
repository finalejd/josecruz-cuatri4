/*
Este es un componente de función de React que representa una tabla HTML.
Toma un objeto props como argumento, aunque actualmente no se están utilizando las props en el componente.
*/
export default function Table3x3(props) {

/*
Este codigo muestra la realizacion de una tabla para poder mostrarce en la pagina una vez que sea visible
*/
    return (
        <table>
            <thead>
                <th>{props.th1} </th>
                <th>{props.th2} </th>
                <th>{props.th3} </th>
            </thead>
            <tbody>
                <tr>
                    <th>Casilla 1</th>
                    <th>Casilla 2</th>
                    <th>Casilla 3</th>
                </tr>
                <tr>
                    <th>Casilla 4</th>
                    <th>Casilla 5</th>
                    <th>Casilla 6</th>
                </tr>
            </tbody>
        </table>
    )
}