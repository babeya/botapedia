import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";

type Props = {
  data?: any; //{ plant: Plant };
};

const PlantPage = ({ data }: Props) => {
  const plant = data?.plant;

  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{plant.name}</p>
    </Layout>
  );
};

export const query = graphql`
  query Plant($key: String) {
    plant(key: { eq: $key }) {
      id
      usualName
    }
  }
`;

export default PlantPage;
