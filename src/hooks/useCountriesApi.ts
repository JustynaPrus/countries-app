import { useEffect, useState } from "react";
import axios from "axios";

export type Country = {
  name: {
    common: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: object;
  languages: object;
  borders: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};

const getCountries = async (url: string): Promise<Country[]> => {
  const { data } = await axios.get<Country[]>(url);
  return data;
};

export const useCountriesApi = (
  url: string
): {
  countries: Country[];
  isError: boolean;
  isLoading: boolean;
} => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const countries = await getCountries(url);
        setCountries(countries);
      } catch (error) {
        setError(true);
      }
    })();

    setLoading(false);
  }, [url]);

  return { countries, isLoading, isError };
};
