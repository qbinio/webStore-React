import React, { useContext } from "react";
import "./SearchInput.css";
import SearchIcon from "../../assets/icons/tools-and-utensils.svg";
import AppContext from "../../context/context";

const SearchInput = () => {
  const context = useContext(AppContext);

  const { searchProductFn, errorSearchInput, clearErrorAlerts } = context;

  return (
    <div className="Wrapper">
      <h1 className="productTitle">Products</h1>
      {errorSearchInput.length === 0 ? (
        ""
      ) : (
        <div className="searchInput_alertsWrapper">
          <p className="searchInput_alertsText">{errorSearchInput}</p>
          <button
            className="searchInput_alertsButton"
            onClick={clearErrorAlerts}
          >
            X
          </button>
        </div>
      )}

      <form className="div2" onSubmit={searchProductFn}>
        <div className="div3">
          <img className="searchIcon" src={SearchIcon} alt="search icon" />
          <input
            className="productInput"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
        </div>
        <div className="productButtonWrapper">
          <button className="productButton" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchInput;
