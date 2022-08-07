import React from "react";

type Props = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
