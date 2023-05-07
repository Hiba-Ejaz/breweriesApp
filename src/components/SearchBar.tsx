import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Brewery } from './interface';
import './SearchBar.css';
import axios from 'axios';
type prop={
value:"string",
ChangeInput:()=>{
}
}
//function SearchBar(props:prop){
    function SearchBar(){
      const [search,setSearch]=useState("");
      const [filteredItems, setFilteredItems]=useState<Brewery[]>();  
    const [breweries, setBreweries]=useState<Brewery[]>();
      const handleChangeListener=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
      }
      useEffect(() => {
        const fetchData = async () => {
          try{
        const response = await axios.get<Brewery[]>('https://api.openbrewerydb.org/breweries');
        setBreweries(response.data);
        setFilteredItems(response.data);
                          }    
                          catch(error: any) {
                              }}
     fetchData();                
    }, []);
      useEffect(() => {
          setFilteredItems(breweries?.filter(item=>item.name.includes(search)));                               
    },[search]);
        
        
       

  return (
    <div>SearchBar
    <SearchIcon className="searchBarIcon"/>
    <input type="text" placeholder='Search By Name'  value={search} onChange={handleChangeListener} />
   <ul>
{filteredItems?.map(p => (
  <li key={p.id}>
     name= {p.name} 
      type=({p.brewery_type})
  </li>
))}
</ul>
    </div>
  )
}

export default SearchBar