import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled"
import { css } from "@emotion/react"


const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media( min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p{
        line-height: 1.5;
        margin-top: 2rem;
    }
`;

const ContenidoNosotros = () => {
  const resultado = useStaticQuery(graphql`
    {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData(
              placeholder: BLURRED
              forceBlurhash: false
              width: 1200
            )
          }
          seoMetaTags {
            id
          }
        }
      }
    }
  `);

  const { titulo, contenido, imagen, seoMetaTags } =
    resultado.allDatoCmsPagina.nodes[0];

  const image = getImage(imagen.gatsbyImageData);

  return (
    <>
      <h2 css={css`
        margin-top: 4rem;
        text-align: center;
        font-size: 4rem;
      `}>{titulo}</h2>
      <Contenido>
        <p css={css`
          text-align: justify;
        `}>{contenido}</p>
        <GatsbyImage image={image} alt={seoMetaTags.id} />
      </Contenido>
    </>
  );
};

export default ContenidoNosotros;
