import React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

type Props = {
  data?: Plant; //{ plant: Plant };
};

const PlantPage = ({ data }: Props) => {
  const plant = data?.plant || {};

  const {
    id,
    usualName,
    order,
    family,
    genus,
    species,
    images: { main },
  } = plant;

  const image = getImage(main);

  return (
    <Layout pageTitle={usualName}>
      {image ? <GatsbyImage image={image} alt={usualName} /> : null}
      <p>{usualName}</p>
      <p>
        {order} - {family} - {genus} - {species}
      </p>
    </Layout>
  );
};

export const query = graphql`
  query Plant($key: String) {
    plant(key: { eq: $key }) {
      id
      usualName
      order
      family
      genus
      species
      key
      images {
        main {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default PlantPage;
