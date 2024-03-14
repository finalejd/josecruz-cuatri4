/*
Esto importa el componente Carousel del paquete @material-tailwind/react, que proporciona la funcionalidad 
para crear carruseles de imágenes y otros elementos.
*/
import { Carousel } from "@material-tailwind/react";

/*Define una función de componente de React llamada CarouselDefault y la exporta como la exportación predeterminada del archivo.*/
export default function CarouselDefault() {

/*
Cada imagen dentro del Carousel tiene un atributo src que apunta a una URL de imagen de Unsplash, un atributo alt para proporcionar un texto 
alternativo para la imagen, y clases de estilo (className) para controlar su apariencia. Las clases h-full, w-full, y object-cover están 
configuradas para que las imágenes se ajusten correctamente y mantengan su relación de aspecto dentro del carrusel.
*/
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://store-images.s-microsoft.com/image/apps.46421.66663660452837213.88feed53-4335-4b35-8a3a-476a0f0fd6ca.e0e7835b-39ff-4892-8010-fd049a22fd5c?q=90&w=480&h=270"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://sm.ign.com/ign_es/screenshot/default/plants-vs-zombies-3-des_691p.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://assetsio.reedpopcdn.com/-1565521894801.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}