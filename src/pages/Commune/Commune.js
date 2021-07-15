import React, { useContext } from "react";
import PropertyContext from "../../context/PropertyContext";
import CommuneUI from "./CommuneUI";

const Commune = () => {
  const [propertyContext, setPropertyContext] = useContext(PropertyContext);
  return (
    <CommuneUI
      setPropertyContext={setPropertyContext}
      propertyContext={propertyContext}
    />
  );
};

export default Commune;
