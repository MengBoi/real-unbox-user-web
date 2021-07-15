import React, { useContext } from "react";
import PropertyContext from "../../context/PropertyContext";
import PropertyTypesUI from "./PropertyTypesUI";

const PropertyTypes = () => {
  const [propertyContext, setPropertyContext] = useContext(PropertyContext);
  return (
    <PropertyTypesUI
      setPropertyContext={setPropertyContext}
      propertyContext={propertyContext}
    />
  );
};
export default PropertyTypes;
