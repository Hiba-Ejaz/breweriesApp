import React from 'react'
import FetchedDataWithLoading from './components/FetchDataWithLoading'
import SearchBar from './components/SearchBar';
import FetchedFilteredData from './components/SearchByName';

const App = () => {
   // call the higher-order function to get the component
  return (
    <div>
      <FetchedDataWithLoading/> 
      {/* <SearchBar></SearchBar> */}
     <FetchedFilteredData></FetchedFilteredData>
    </div>
  )
}

export default App;


