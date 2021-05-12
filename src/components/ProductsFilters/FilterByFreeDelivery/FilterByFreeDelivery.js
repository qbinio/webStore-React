import React, { useContext } from "react";
import AppContext from "../../../context/context";

const FilterByFreeDelivery = () => {
  const context = useContext(AppContext);
  const { handleFreeDelivery, freeDelivery } = context;
  return (
    <div>
      <label htmlFor="freeDelivery"> Free delivery </label>
      <input
        type="checkbox"
        id="freeDelivery"
        checked={freeDelivery && true}
        onChange={handleFreeDelivery}
      />
    </div>
  );
};

export default FilterByFreeDelivery;
