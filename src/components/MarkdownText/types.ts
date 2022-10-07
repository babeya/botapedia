export type MarkdownTextProps = {
  markdown: {
    html: string;
    frontmatter: {
      author: string;
      href: string;
      name: string;
      title: string;
      type: string;
    };
  };
};
