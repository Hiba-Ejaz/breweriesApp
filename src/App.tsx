import React from 'react'
import "./App.css"
import FetchedDataWithLoading from './components/FetchDataWithLoading'
import SearchBar from './components/SearchBar';
import FetchedFilteredData from './components/SearchByName';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Breweries from './pages/Breweries';
import Error from './pages/Breweries';
import Header from './components/Header';
import Breweriess from './pages/Breweries';
import { Brewery } from './components/interface';
import fetchDataFromApiFunction from './components/fetchDataFromApiFunction';
import Detailss from './pages/Details';
interface Props {
  breweries: Brewery[];
}
const App = () => {

   // call the higher-order function to get the component
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/breweries" element={<Breweriess/>}/>
        <Route path="/details/:breweryId" element={<Detailss/>} />
        <Route path="*" element={<Error/>}></Route> 
      </Routes>
      </BrowserRouter>
      {/* <FetchedDataWithLoading/> 
      {/* <SearchBar></SearchBar> 
     <FetchedFilteredData></FetchedFilteredData> */}
    </div>
  )
}

export default App;


