import React from "react";
import { useCountriesApi } from "../../hooks/useCountriesApi";
import CircularProgress from "@mui/material/CircularProgress";
import { CountryCard } from "../CountryCard/CountryCard";

const url =
  "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags";

export const CountriesList: React.FC = () => {
  const { countries, isLoading, isError } = useCountriesApi(url);

  return (
    <React.Fragment>
      {isLoading && <CircularProgress />}
      {!isLoading && <CountryCard countries={countries} />}
      {isError && <p>Cannot fetch countries.</p>}
    </React.Fragment>
  );
};
