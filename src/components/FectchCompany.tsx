import React, { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import SearchBar from './SearchBar';

 interface Brewery{
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
    const [breweries, setBreweries]=useState<Brewery[]>();
    const [error,setError]=useState("");
    const [loading, setLoading]=useState(true);
         useEffect(() => {
      const fetchData = async () =>{
      setTimeout(async()=>{
        try{
      const response = await axios.get<Brewery[]>('https://api.openbrewerydb.org/breweries');
      setBreweries(response.data);
      setLoading(false);
            } catch(error: any) {
                                setError(error.message);
                                setLoading(false)   
                                 }
                                },4000);}
   fetchData();                
  }, []);
  if (error.length>0) {
    return <div>Error: {error}</div>;
  } else if (loading) {
    console.log("loading")
    return <div>Loading...</div>;
  } else {
    console.log("loading")
    return (
        <div>
           
      <ul>
        {breweries?.map(item => (
          <li key={item.id}>
             name= {item.name} 
              type=({item.brewery_type})
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default FectchCompany