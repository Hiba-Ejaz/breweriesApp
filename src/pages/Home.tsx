import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Brewery } from "../components/interface";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const [breweries, setBreweries] = useState<Brewery[]>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await axios.get<Brewery[]>(
            "https://api.openbrewerydb.org/breweries"
          );
          setBreweries(response.data);
          setLoading(false);
        } catch (error: any) {
          setError(error.message);
          setLoading(false);
        }
      }, 4000);
    };
    fetchData();
  }, []);
  if (error.length > 0) {
    return <div>Error: {error}</div>;
  } else if (loading) {
    console.log("loading");
    return <div>Loading...</div>;
  } else {
    console.log("loading");
    return (
        <div className="breweries-container">
       <table className="breweries-container__breweries-list">
          {breweries?.map((item) => (
            <tr> <li className="breweries-container__breweries-list__breweries-item" >
            name= {item.name}
            type=({item.brewery_type})
            <button><Link to={`/details/${parseInt(item.id)}`}>DETAILS &#8594;</Link></button>
          </li>
         </tr>
           
          ))}
        </table>
      </div>
    );
  }
}

export default Home;
