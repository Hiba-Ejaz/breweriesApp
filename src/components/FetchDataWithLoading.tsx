import React from 'react'
import fetchDataFromApiFunction from './fetchDataFromApiFunction';
import { Brewery } from './interface';
import SearchBar from './SearchBar';
interface Props {
  breweries: Brewery[];
}

function FetchDataWithLoading({breweries}: Props){
  return (
    <div>
    <SearchBar/>
<ul>
{breweries?.map(p => (
  <li key={p.id}>
     name= {p.name} 
      type=({p.brewery_type})
  </li>
))}
</ul>
</div>
  )
}

const FetchedDataWithLoading=fetchDataFromApiFunction(FetchDataWithLoading, "https://api.openbrewerydb.org/breweries");
export default FetchedDataWithLoading;