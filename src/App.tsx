import React from 'react'
import FetchedDataWithLoading from './components/FetchDataWithLoading'
import SearchBar from './components/SearchBar';

const App = () => {
   // call the higher-order function to get the component
  return (
    <div>
      {/* <FetchedDataWithLoading/> */}
      <SearchBar></SearchBar>
    </div>
  )
}

export default App;


