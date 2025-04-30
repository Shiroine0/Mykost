import React from "react";
import Navbar from "../components/Navbar";
import Details from "../components/ListKost";
import SearchBar from "../components/SearchBarListKost";
// import { useSearch } from "../components/searchcontext";


const FullListKost: React.FC = () => {
    // const { search } = useSearch();
  
  return (
    <html data-theme="light">
        <Navbar />
        <SearchBar />
        <Details />
    </html>
  );
}

export default FullListKost;