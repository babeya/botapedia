import React from "react";

import Typography from "@mui/material/Typography";

import type { MarkdownTextProps } from "./types";
import WikipediaArticle from "./WikipediaArticle";

const RENDERER: { [type: string]: React.FunctionComponent<MarkdownTextProps> } =
  {
    wikipedia: WikipediaArticle,
  };

const DefaultRenderer = (props: MarkdownTextProps) => (
  <Typography dangerouslySetInnerHTML={{ __html: props.markdown?.html }} />
);

const MarkdownText = (props: MarkdownTextProps) => {
  if (!props.markdown) {
    return null;
  }

  const type = props.markdown?.frontmatter?.type;
  const Component = RENDERER[type] || DefaultRenderer;

  return <Component {...props} />;
};

export default MarkdownText;
