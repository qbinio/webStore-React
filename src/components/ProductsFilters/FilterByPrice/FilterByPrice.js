import React, { useContext } from "react";
import AppContext from "../../../context/context";

const FilterByPrice = () => {
  const context = useContext(AppContext);

  const { filterPrice, handleFilterPriceChange, maxProductPrice } = context;

  return (
    <div className="filterMenu_byPrice">
      <label htmlFor="priceFilterInput">
        <p>Product price: {filterPrice}$</p>
      </label>
      <input
        type="range"
        id="priceFilterInput"
        name="priceFilterInput"
        min={0}
        max={maxProductPrice}
        value={filterPrice}
        onChange={handleFilterPriceChange}
      />
    </div>
  );
};

export default FilterByPrice;
