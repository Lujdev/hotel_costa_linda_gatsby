import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  p{
    line-height: 2;
  }
`;

const ContenidoInicio = () => {
  const informacion = useStaticQuery(graphql`
    {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData(
              placeholder: BLURRED
              forceBlurhash: false
              imgixParams: { invert: false }
            )
          }
          seoMetaTags {
            id
          }
        }
      }
    }
  `);

  // console.log(informacion.allDatoCmsPagina.nodes[0]);

  const { titulo, contenido, imagen, seoMetaTags } =
    informacion.allDatoCmsPagina.nodes[0];

  const image = getImage(imagen.gatsbyImageData);

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>

      <TextoInicio>
        <p css={css`
          text-align: justify;
        `}>{contenido}</p>

        <GatsbyImage image={image} alt={seoMetaTags.id} />
      </TextoInicio>
    </>
  );
};

export default ContenidoInicio;
