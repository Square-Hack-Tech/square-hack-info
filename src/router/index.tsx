import { lazy, Suspense } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import {Route, Routes } from "react-router-dom";


const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
          {routes.map((routeItem) => {
            return (
              <Route path={routeItem.path} element={<routeItem.element />} />
            );
          })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
