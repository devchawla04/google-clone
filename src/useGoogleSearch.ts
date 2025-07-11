import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "2322902e22cec4457";

export interface SearchInformation {
  formattedTotalResults: string;
  formattedSearchTime: string;
}

export interface CseImage {
  src: string;
}

export interface PageMap {
  cse_image?: CseImage[];
}

export interface SearchItem {
  link: string;
  displayLink: string;
  title: string;
  snippet: string;
  pagemap?: PageMap;
}

export interface SearchData {
  searchInformation: SearchInformation;
  items: SearchItem[];
}

const useGoogleSearch = (term: string) => {
  const [data, setData] = useState<SearchData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`,
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
