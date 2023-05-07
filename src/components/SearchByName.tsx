import React, { useCallback, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Brewery } from './interface';
import './SearchBar.css';
import { debounce } from '@mui/material';
import fetchDataFromApiFunction from './fetchDataFromApiFunction';


interface Props {
    breweries: Brewery[];
  }
// type searchProps = {
//     search: string;
//     setSearch: React.Dispatch<React.SetStateAction<searchProps | undefined>>;
  
//   };
function SearchByName({breweries}: Props) {
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
    {filteredItems?.map(p => (
    <li key={p.id}>
     name= {p.name} 
      type=({p.brewery_type})
    </li>
    ))}
    </ul>
</>
  )
}
const FetchedFilteredData=fetchDataFromApiFunction(SearchByName, `https://api.openbrewerydb.org/breweries`);
export default FetchedFilteredData;