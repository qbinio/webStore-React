import React, { useContext } from "react";
import "./FilterByName.css";
import SearchIcon from "../../../assets/icons/tools-and-utensils.svg";
import AppContext from "../../../context/context";

const FilterByName = () => {
  const context = useContext(AppContext);
  const { handleSearchProductByNameChange, searchProductByName } = context;
  return (
    <div className="filterMenu_byName">
      <div className="filterMenu_byNameWrapper">
        <img className="searchIcon" src={SearchIcon} alt="search icon" />
        <input
          className="productInput"
          type="search"
          placeholder="search product"
          value={searchProductByName}
          onChange={handleSearchProductByNameChange}
        />
      </div>
    </div>
  );
};
export default FilterByName;
