import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Breweriess from "./pages/Breweries";
import { Brewery } from "./components/interface";
import Detailss from "./pages/Details";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breweries" element={<Breweriess />} />
          <Route path="/details/:breweryId" element={<Detailss />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
