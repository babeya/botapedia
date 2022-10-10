import React from "react";

type Props = {
  title: string;
  description: string;
};

const BaseHead = ({ title, description }: Props) => (
  <React.Fragment>
    <title>{title}</title>
    <meta name="description" content={description || ""} />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </React.Fragment>
);

export default BaseHead;
