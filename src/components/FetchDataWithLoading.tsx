import React from "react";
import fetchDataFromApiFunction from "./fetchDataFromApiFunction";
import { Brewery } from "./interface";
interface Props {
  breweries: Brewery[];
}

function FetchDataWithLoading({ breweries }: Props) {
  return (
    <div>
      <ul>
        {breweries?.map((brewery) => (
          <li key={brewery.id}>
            <h2>{brewery.name}</h2>
            <p>{brewery.brewery_type}</p>
            <p>{brewery.street}</p>
            <p>
              {brewery.city}, {brewery.state} {brewery.postal_code}
            </p>
            <p>{brewery.country}</p>
            <p>{brewery.phone}</p>
            <a href={brewery.website_url}>{brewery.website_url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const FetchedDataWithLoading = fetchDataFromApiFunction(
  FetchDataWithLoading,
  "https://api.openbrewerydb.org/breweries"
);
export default FetchedDataWithLoading;
