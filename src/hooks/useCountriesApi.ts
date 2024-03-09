import { useEffect, useState, useCallback } from "react";
import axios from "axios";

type Currency = {
  name: string;
  symbol: string;
};

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
  currencies: Record<string, Currency>;
  languages: Record<string, string>;
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
//tanstack/query
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

  const dataHandler = useCallback(async (url: string) => {
    try {
      const countries = await getCountries(url);
      setCountries(countries);
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    dataHandler(url);
    setLoading(false);
  }, [dataHandler, url]);

  return { countries, isLoading, isError };
};
