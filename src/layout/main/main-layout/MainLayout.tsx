import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

type IMainLayoutProps = {};

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children,
}) => {
  return (
    <div className="section">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
