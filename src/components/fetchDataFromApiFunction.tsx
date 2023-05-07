import axios from 'axios';
import React, { useEffect, useState } from 'react'

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


function fetchDataFromApiFunction(ChildComponent: React.FC<{ breweries: Brewery[] }>, url:string){
return()=>{

    const [breweries, setBreweries]=useState<Brewery[]>();
    const [error,setError]=useState("");
    const [loading, setLoading]=useState(true);
    <div>fetchDataFromApiFunction</div>
    useEffect(() => {
        const fetchData = async () => {
          try{
        const response = await axios.get<Brewery[]>('https://api.openbrewerydb.org/breweries');
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
        return <p>Error: {error}</p>;
      }
       if (loading) {
        console.log("loading")
       return <p>Loading...</p>;
      } 
    return <ChildComponent breweries={breweries!} />
    
}
}


export default fetchDataFromApiFunction