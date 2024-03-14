/*
Esto importa varios componentes de Material Tailwind que se utilizarán en la barra de navegación. 
Incluye Navbar para la estructura de la barra de navegación, Typography para los elementos de texto, 
Button para los botones y IconButton para los botones de ícono.
*/
import React from "react";
import {Navbar,MobileNav,Typography,Button,IconButton} from "@material-tailwind/react";


/*
Define una función de componente de React llamada Header y la exporta como la exportación predeterminada del archivo.
*/
export default function Header() {

/*
Este es el componente Navbar que contiene los elementos de la barra de navegación. 
Tiene clases de Tailwind CSS para controlar el diseño y el espacio interno.

</Typography>: Este es un elemento de texto (Typography) que se muestra como un enlace (<a>) con el texto "My page". 
Tiene una clase adicional para estilizar el enlace y hacerlo interactivo.
*/
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
          Inicioo
        </Typography>
        <Typography as="a" href="#" className="cursor-pointer py-1.5 font-medium">
          Conoce a las plantas
        </Typography>
        <Typography as="a" href="#">
          Conoce a los zombis
        </Typography>
        <Typography as="a" href="#">
          Viaja a Suburbia
        </Typography>
        <Typography as="a" href="#">
          Inicia sesion en EA
        </Typography>
      </div>
    </Navbar>
  );
}

