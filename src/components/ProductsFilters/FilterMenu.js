import React from "react";
import FilterByFreeDelivery from "./FilterByFreeDelivery/FilterByFreeDelivery";
import FilterByPrice from "./FilterByPrice/FilterByPrice";
import FilterByCategory from "./FilterByCategory/FilterByCategory";
import FilterByName from "./FilterByName/FilterByName";
import "./FilterMenu.css";

const FilterMenu = () => {
  return (
    <div className="filterMenu">
      <FilterByName />
      <FilterByFreeDelivery />
      <FilterByCategory />
      <FilterByPrice />
    </div>
  );
};

export default FilterMenu;
