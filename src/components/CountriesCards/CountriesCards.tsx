import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { DisplayDetails } from "../DisplayDetails/DisplayDetails";
import { Country } from "../../hooks/useCountriesApi";
import styles from "./CountriesCards.module.scss";

export const CountriesCards: React.FC<{
  countries: Country[];
}> = ({ countries }) => {
  return (
    <Grid container spacing={8}>
      {countries.map((country) => (
        <Grid item xs={3}>
          <Card key={country.name.common}>
            <CardMedia
              component="img"
              src={country.flags.svg}
              alt={country.flags.alt}
              className={styles.cardImage}
            />
            <CardContent>
              <b>{country.name.common}</b>
              <DisplayDetails text="Population:" value={country.population} />
              <DisplayDetails text="Region:" value={country.region} />
              <DisplayDetails text="Capital:" value={country.capital[0]} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
