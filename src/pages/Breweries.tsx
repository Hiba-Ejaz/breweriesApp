//Search By Name
import React, { useCallback, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Brewery } from '../components/interface';
import {  Button, TextField, debounce } from '@mui/material';
import fetchDataFromApiFunction from '../components/fetchDataFromApiFunction';
import { Link, useParams } from 'react-router-dom';
import "./Breweries.css";

interface Props {
    breweries: Brewery[];
  }

function Breweries({breweries}: Props) {
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
    <div className="searchByNameComponent">
    <SearchIcon className="searchByNameComponent__searchBarIcon"/>
    <TextField label="Search By Name" id="searchByNameComponent__searchField" placeholder='Search Brewery By Name' onChange={handleChangeListener} required/>
    <h2>filtered results</h2>
    <div className="searchByNameComponent__breweries--container">
    <table className="searchByNameComponent__breweries--container__breweries-list">
          {filteredItems?.map((brewery) => (
            <tr>  <li key={brewery.id}  className="breweries--container__breweries-list__breweries-item">
            <h2>{brewery.name}</h2>
            <p>{brewery.brewery_type}</p>
            <p>{brewery.street}</p>
            <p>{brewery.city}, {brewery.state} {brewery.postal_code}</p>
            <p>{brewery.country}</p>
            <p>{brewery.phone}</p>
            <a href={brewery.website_url}>{brewery.website_url}</a>
            <div>
            <Button  sx={{ backgroundColor: "#333" ,
                       "&:hover":{
                                  backgroundColor:"grey"                   
            }}} className="details__btn" variant="contained" color="secondary"><Link to={`/details/${parseInt(brewery.id)}`}>DETAILS &#8594;</Link></Button>
            </div>
          </li>
         </tr>
            ))}
          </table>
          </div>
          </div>
  )
 
}
const Breweriess=fetchDataFromApiFunction( Breweries, `https://api.openbrewerydb.org/breweries`);

export default Breweriess