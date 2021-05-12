import React, { useContext } from "react";
import AppContext from "../../../context/context";

const FilterByCategory = () => {
  const context = useContext(AppContext);
  const {
    initalProductsState,
    handleCategoryFilterChange,
    categoryFilter,
  } = context;
  const productsCategory = [
    "all",
    ...new Set(
      initalProductsState.map((product) => {
        return product.productCategory;
      })
    ),
  ];
  console.log(productsCategory);

  return (
    <div>
      <label htmlFor="categorySelect">filter by category:</label>
      <select
        id="categorySelect"
        value={categoryFilter}
        onChange={handleCategoryFilterChange}
      >
        {productsCategory.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
    </div>
  );
};

export default FilterByCategory;
