import React, { useEffect, useState } from 'react'
import axios from 'axios'

 interface brewery{
    
        id: string,
        name: string,
        brewery_type:string,
        address_1: string,
        address_2: null,
        address_3: null,
        city:string,
        state_province: string,
        postal_code:string,
        country: string,
        longitude: string,
        latitude: string,
        phone:string,
        website_url: string,
        state: string,
        street: string  
 }

 function FectchCompany() {
    const [breweries, setBreweries]=useState<brewery[]>();
         useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<brewery[]>('https://api.openbrewerydb.org/breweries');
      setBreweries(response.data);
    };

    fetchData();
  }, []);
return (
    <div>
    {breweries?.map((brewery) => (
        <div key={brewery.id}>
          <h2>name : {brewery.name}</h2>
          <p>city : {brewery.city}</p>  
          <p> state : {brewery.state_province}</p>
        </div>
      ))}
   </div>
  )
}

export default FectchCompany