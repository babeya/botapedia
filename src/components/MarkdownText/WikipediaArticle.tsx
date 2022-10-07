import React from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { MarkdownTextProps } from "./types";

const WikipediaArticle = (props: MarkdownTextProps) => {
  return (
    <div>
      <Typography dangerouslySetInnerHTML={{ __html: props.markdown?.html }} />
      <div>
        <Typography variant="caption">
          <Link
            href="https://creativecommons.org/licenses/by-sa/3.0/deed.fr"
            target="_blank"
          >
            Contenu soumis à la licence CC-BY-SA 3.0
          </Link>
          . Source : Article{" "}
          <Link href={props.markdown?.frontmatter?.href}>
            {props.markdown?.frontmatter?.name}
          </Link>{" "}
          de
          <Link href="https://fr.wikipedia.org/" target="_blank">
            {" "}
            Wikipédia en français{" "}
          </Link>
          (<Link href={props.markdown?.frontmatter?.author}>auteurs</Link>)
        </Typography>
      </div>
    </div>
  );
};

export default WikipediaArticle;
