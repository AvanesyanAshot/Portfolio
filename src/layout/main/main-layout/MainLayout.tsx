import React from "react";
import Header from "../header/Header";

type IMainLayoutProps = {};

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
