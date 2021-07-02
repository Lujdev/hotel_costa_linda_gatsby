import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsHabitacion {
        nodes {
          id
          titulo
          slug
          contenido
          imagen {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  `);
  
  return data.allDatoCmsHabitacion.nodes.map((habitacion) => ({
    titulo: habitacion.titulo,
    id: habitacion.id,
    contenido: habitacion.contenido,
    imagen: habitacion.imagen.gatsbyImageData,
    slug: habitacion.slug,
  }));
};

export default useHabitaciones;
