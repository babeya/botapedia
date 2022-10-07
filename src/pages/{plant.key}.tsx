import React from "react";

import { graphql, HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, BaseHead } from "../components";

type Props = {
  data: { plant: Queries.Plant };
};

const PlantPage = ({
  data: {
    plant: {
      id,
      usualName,
      order,
      family,
      genus,
      species,
      // @ts-ignore // TODO
      mainImage: { src },
    },
  },
}: Props) => {
  const image = getImage(src);

  return (
    <Layout>
      {image ? <GatsbyImage image={image} alt={usualName || ""} /> : null}
      <p>{usualName}</p>
      <p>
        {order} - {family} - {genus} - {species}
      </p>
    </Layout>
  );
};

export const Head: HeadFC = ({
  data: {
    // @ts-ignore
    plant: { usualName },
  },
}) => <BaseHead title={`Botapedia : ${usualName}`} />;

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
      mainImage {
        src {
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
