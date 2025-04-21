import React from "react";
import Navbar from "../components/Navbar";
import Details from "../components/ListKost";
import SearchBar from "../components/SearchBarListKost";

const FullListKost: React.FC = () => {
  return (
    <html data-theme="light">
        <Navbar />
        <SearchBar />
        <Details />
    </html>
  );
}

export default FullListKost;