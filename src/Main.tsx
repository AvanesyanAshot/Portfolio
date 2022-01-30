import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./App.css";
import MainLayout from "./layout/main/main-layout/MainLayout";

function Main() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<div>ERROR 404 NOT FOUND</div>} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default Main;
