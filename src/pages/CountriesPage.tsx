import React from "react";
import { Header } from "../components/Header/Header";
import { CountriesList } from "../components/CountriesList/CountriesList";

export const CountriesPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <CountriesList />
    </React.Fragment>
  );
};
