import React, { useState } from "react";
import Cocktail from "./Cocktail";

export const Search = ({ data }) => {
  const [searchedData, setSearchedData] = useState([]);
  const [search, setSearch] = useState([]);

  const onSearch = (e) => {
    e.preventDefault();
    setSearchedData(
      data.filter((item) =>
        item.strDrink.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div className="search col-12 row p-0 ">
      <form className="col-11 px-4 mb-3">
        <div className="search-form col-12">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="col-6"
            type="text"
            placeholder="Enter the name of the coctail"
            value={search}
          />
          <button onClick={onSearch} className="col-3 mx-3">
            Search
          </button>
        </div>
      </form>

      {search.length !== 0 &&
        searchedData.map((item, index) => <Cocktail key={index} data={item} />)}
    </div>
  );
};
