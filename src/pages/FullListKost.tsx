import React from "react";
import Navbar from "../components/Navbar";
import ListKost from "../components/ListKost";
import SearchBar from "../components/SearchBarListKost";

const FullListKost: React.FC = () => {
  return (
    <div data-theme="light" className="min-h-screen">
      <Navbar />
      <SearchBar />
      <ListKost />
    </div>
  );
}

export default FullListKost;