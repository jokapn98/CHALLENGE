import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "./subcomponents/Search";
import { Random } from "./subcomponents/Random";
export default function Coctails() {
  const [data, setData] = useState([]);

  let url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <Search data={data} />
      </div>
      <Random data={data} />
    </div>
  );
}
