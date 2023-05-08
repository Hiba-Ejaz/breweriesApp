
import { Link,useNavigate,useParams,useLocation, Navigate} from 'react-router-dom'
import React, { useCallback, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Brewery } from '../components/interface';
import {  debounce } from '@mui/material';
import fetchDataFromApiFunction from '../components/fetchDataFromApiFunction';

interface Props {
    breweries: Brewery[];
  }
function Details({breweries}: Props) {
    const navigate=useNavigate();
    const [detail, setDetail]=useState<Brewery>();  
    const {breweryId}=useParams();
    useEffect(() => {
        const singleBrewery = breweries.find(brewery => parseInt(brewery.id) === parseInt(breweryId!));
        setDetail(singleBrewery);
      }, [breweries, breweryId]);
    
    
     return (
    
    <div className="sub-nav">
      <h3>Detail of {detail?.name}</h3>
      {detail && (
        <table>
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{detail.id}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{detail.name}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{detail.street}, {detail.city}, {detail.state} {detail.postal_code}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{detail.phone}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td><a href={detail.website_url}>{detail.website_url}</a></td>
            </tr>
          </tbody>
        </table>
      )}
         
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/breweries">BREWERIES BY NAME</Link>
      </li>
      <li>
      </li>
    </ul>
  </nav>
  <button onClick={()=>navigate(-1)}>BACK</button>
  <button onClick={()=>navigate("./breweries")}>list All Breweries</button>
  <Link to="/Home">HOME</Link>
  </div>
  )
}
const Detailss=fetchDataFromApiFunction( Details, `https://api.openbrewerydb.org/breweries`);

export default Detailss