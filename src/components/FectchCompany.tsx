import React, { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

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
    const [error,setError]=useState("");
    const [loading, setLoading]=useState(true);
         useEffect(() => {
      const fetchData = async () => {
        try{
      const response = await axios.get<brewery[]>('https://api.openbrewerydb.org/breweries');
      setBreweries(response.data);
      setLoading(false);
                        }    
                        catch(error: any) {
                                setError(error.message);
                                setLoading(false)   
                            }}
   fetchData();                
  }, []);
  if (error.length>0) {
    return <div>Error: {error}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {breweries?.map(item => (
          <li key={item.id}>
             name= {item.name} 
              type=({item.brewery_type})
          </li>
        ))}
      </ul>
    );
  }
}

export default FectchCompany