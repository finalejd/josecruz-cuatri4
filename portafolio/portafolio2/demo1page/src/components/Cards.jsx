/*
Esto importa varios componentes de Material Tailwind, incluyendo Card, CardHeader, 
CardBody, CardFooter, Typography, y Button. Estos componentes proporcionan estructuras predefinidas y 
estilos para construir tarjetas con contenido visualmente atractivo.
*/
import {Card,CardHeader,CardBody,CardFooter,Typography,Button} from "@material-tailwind/react";


/*
El primero tiene un tamaño de variante "h5" y color "blue-gray", y contiene el texto "UI/UX Review Check". 
El segundo contiene un texto descriptivo.
*/

/*
La imagen dentro del CardHeader tiene un atributo src establecido en una URL de imagen de ejemplo de 
Unsplash y un atributo alt establecido en "card-image".
*/

export default function Cards() {
  return (
    <Card className="mt-10 w-10">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://media.contentapi.ea.com/content/dam/gin/images/2024/01/pvz3-gin-asset-1x1-1.jpg.adapt.crop1x1.767p.jpg"
          alt="card-image"
        />
      </CardHeader>

      <CardFooter className="pt-0">
        <Button>Lee mas sobre las plantas </Button>
      </CardFooter>
    </Card>
  );
}