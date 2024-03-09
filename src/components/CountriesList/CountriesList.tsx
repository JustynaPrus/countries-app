import React from "react";
import { useCountriesApi } from "../../hooks/useCountriesApi";
import CircularProgress from "@mui/material/CircularProgress";
import { CountriesCards } from "../CountriesCards/CountriesCards";

const url =
  "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags";

export const CountriesList: React.FC = () => {
  const { countries, isLoading, isError } = useCountriesApi(url);

  return (
    <React.Fragment>
      {isLoading && <CircularProgress />}
      {!isLoading && <CountriesCards countries={countries} />}
      {isError && <p>Cannot fetch countries.</p>}
    </React.Fragment>
  );
};
