import React from "react";

export default function Cocktail({ data }) {
  let {
    idDrink,
    strDrinkThumb,
    strDrink,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7
  } = data;
  return (
    <div className="coctail bg-silver col-12  col-lg-5 mx-3 mt-5 p-2">
      <div className="coctail-img col-4">
        <img src={strDrinkThumb} alt="" />
      </div>
      <div className="coctail-information col-8 mx-2">
        <h1 className="h1 fw-700 c-dark-gray text-center">{strDrink}</h1>
        <p className="p1 fw-300 col-8 ">{strInstructions}</p>
        <ul className="bg-white col-10 row py-1">
          <lo className="p2 fw-500 col-6 my-1">{strIngredient1}</lo>
          <lo className="p2 fw-500 col-6 my-1">{strIngredient2}</lo>
          <lo className="p2 fw-500 col-6 my-1">{strIngredient3}</lo>
          <lo className="p2 fw-500 col-6 my-1">{strIngredient4}</lo>
          <lo className="p2 fw-500 col-6 my-1">{strIngredient5}</lo>
          <lo className="p2 fw-500 col-6 my-1">{strIngredient6}</lo>
          <lo className="p2 fw-500 col-6 my-1s">{strIngredient7}</lo>
        </ul>
      </div>
    </div>
  );
}
