import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from './layout';
import { css } from "@emotion/react";

export const data = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData(width: 1200)
        }
        id
      }
    }
  }
`;

const HabitacionTemplate = ({ data: { allDatoCmsHabitacion: {nodes}} }) => {
  const { titulo, contenido, imagen, id } = nodes[0];

  const image = getImage(imagen.gatsbyImageData);

  return (
    <Layout>
      <main css={css`
        margin: 0 auto;
        max-width: 1200px;
        width: 95%;
      `}>
        <h1 css={css`
          text-align: center;
          margin-top: 4rem;
        `}>{titulo}</h1>
        <p>{contenido}</p>
        <GatsbyImage image={image} alt={id} />
      </main>
    </Layout>
  );
};

export default HabitacionTemplate;
