import React, { useCallback, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Brewery } from '../components/interface';
import {  debounce } from '@mui/material';
import fetchDataFromApiFunction from '../components/fetchDataFromApiFunction';
import { Link, useParams } from 'react-router-dom';


interface Props {
    breweries: Brewery[];
  }

function Breweries({breweries}: Props) {
    //const [search,setSearch]=useState<searchProps>({ search: '', setSearch: () => {} });
    const [search,setSearch]=useState<string>("");
    const [filteredItems, setFilteredItems]=useState<Brewery[]>();  

    const handleChangeListener=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const text=e.target.value;
        memoizedCallback(text);
      }
      const memoizedCallback = useCallback(
        debounce((text:string)=>{setSearch(text)},1000),
        []
      );
      useEffect(() => {
        setFilteredItems(breweries?.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())));                               
  },[search]);
  return (
    <>
    SearchBar
    <SearchIcon className="searchBarIcon"/>
    <input type="text" placeholder='Search By Name' onChange={handleChangeListener} />
    <h2>filtered results</h2>
    <ul>
    {filteredItems?.map(brewery => (
    
         <li key={brewery.id}>
          <h2>{brewery.name}</h2>
          <p>{brewery.brewery_type}</p>
          <p>{brewery.street}</p>
          <p>{brewery.city}, {brewery.state} {brewery.postal_code}</p>
          <p>{brewery.country}</p>
          <p>{brewery.phone}</p>
          <a href={brewery.website_url}>{brewery.website_url}</a>
          <div>
          <button><Link to={`/details/${parseInt(brewery.id)}`}>DETAILS &#8594;</Link></button>
          </div>
        </li>
    
    ))}
    
    </ul>
</>
  )
}
const Breweriess=fetchDataFromApiFunction( Breweries, `https://api.openbrewerydb.org/breweries`);
export default Breweriess