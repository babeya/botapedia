import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";

type Props = {
  data?: Plant; //{ plant: Plant };
};

const PlantPage = ({ data }: Props) => {
  const plant = data?.plant || {};
  const { id, usualName, order, family, genus, species } = plant;

  return (
    <Layout pageTitle="Super Cool Blog Posts">
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
    }
  }
`;

export default PlantPage;
