import React, { useCallback, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Brewery } from './interface';
import './SearchBar.css';
import axios from 'axios';
import { debounce } from '@mui/material';
import { text } from 'stream/consumers';
type prop={
value:"string",
ChangeInput:()=>{
}
}
// function debounce(cb:any,delay=1000){
//   let timeout: NodeJS.Timeout;
//   return(...args:[])=>{
//    clearTimeout(timeout)
//    timeout=setTimeout(()=>{
//     cb(...args)
//    },delay )
// } }
//function SearchBar(props:prop){
    function SearchBar(){
      const [search,setSearch]=useState("");
      const [filteredItems, setFilteredItems]=useState<Brewery[]>();  
    const [breweries, setBreweries]=useState<Brewery[]>();
      const handleChangeListener=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const text=e.target.value;
        memoizedCallback(text);
     
     // deb();
        // updateSearchText(e.target.value)
      }
      const memoizedCallback = useCallback(
        debounce((text:string)=>{setSearch(text)},1000),
        []
      );
        //const updateSearchText=debounce((text:string)=>{setSearch(text) } );
    
      
    
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
          setFilteredItems(breweries?.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())));                               
    },[search]);
        
        
       

  return (
    <div>SearchBar
    <SearchIcon className="searchBarIcon"/>
    <input type="text" placeholder='Search By Name' onChange={handleChangeListener} />
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