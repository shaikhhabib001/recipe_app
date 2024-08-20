import { Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Search />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
