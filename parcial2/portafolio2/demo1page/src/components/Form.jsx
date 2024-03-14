/*
Esto importa el módulo useState de React, que permite al componente tener estado interno. También importa React, necesario para usar JSX.
*/
import React, { useState } from 'react';

/*
Define una función de componente de React llamada Form y la exporta como la exportación predeterminada del archivo.
*/
export default function Form() {

/*
Declara un estado lastName utilizando el hook useState, que representa el valor del campo de apellido. selfLastName 
es una función que se utilizará para actualizar el estado lastName.
*/
    const [firstName, selfFirstName] = useState('');
    const [lastName, selfLastName] = useState('');
    const fullname = firstName + '' + lastName

/*
Las funciones handleFirstNameChange y handleLastNameChange se utilizan para manejar los cambios en los campos de nombre y apellido, respectivamente. 
Cada una actualiza el estado correspondiente cuando el usuario ingresa datos en los campos.
*/
    function handleFirstNameChange(e) {
        selfFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        selfLastName(e.target.value);
    }

/*
El componente devuelve un formulario que incluye campos de entrada para el nombre y el apellido. 
Cada campo tiene su valor vinculado al estado correspondiente y se actualiza mediante las funciones 
handleFirstNameChange y handleLastNameChange cuando cambian.
*/
    return (
        <>
            <h2>Inicia Sesion</h2>
            <form action="" class="form">

                <label htmlFor="firstName">Nombre : </label>
                <input type="text" value={firstName} onChange={handleFirstNameChange} />

                <label htmlFor="lasName">Apellido : </label>
                <input type="text" value={lastName} onChange={handleLastNameChange} />

            </form>

            <p> Welcome : <strong>{fullname}</strong></p>

        </>
    );
}