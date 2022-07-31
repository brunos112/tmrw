import React, { ReactNode } from "react";
import Bottom from "./Bottom";
import Header from "./Header";

interface Props {
    children?: ReactNode,
    page?: string
    // any props that come into the component
}

function Layout({ children, page, ...props }: Props) {
  return (
    <div className={`container ${page ? page : ""}`}>
      <Header />

      {children}

      <Bottom />
    </div>
  );
}

export default Layout;
