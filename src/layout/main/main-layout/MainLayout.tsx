import React from "react";
import Header from "../header/Header";

type IMainLayoutProps = {};

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children,
}) => {
  return (
    <div className="section">
      <div className="container">
        <Header />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
