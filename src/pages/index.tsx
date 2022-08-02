import React from "react";

import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }: any) => {
  const edges = data?.allPlant?.edges || [];

  return (
    <div>
      <div>Hola Amigos</div>
      {edges.map((edge: any) => (
        <span key={edge?.node?.key}>{edge?.node?.name}</span>
      ))}
    </div>
  );
};

export const query = graphql`
  query allPlant {
    allPlant {
      edges {
        node {
          id
          genus
          usualName
          sub_family
          species
          order
          key
          family
        }
      }
    }
  }
`;

export default IndexPage;
