import React from "react";
import ServiceUI from "./ServiceUI";
// import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
const Service = () => {
  const history = createBrowserHistory({ forceRefresh: true });

  const onStudioClick = () => {
    history.push("/Studio");
  };
  const onPropertyFinderClick = () => {
    history.push("/Properties");
  };

  return (
    <ServiceUI
      onStudioClick={onStudioClick}
      onPropertyFinderClick={onPropertyFinderClick}
    />
  );
};
export default Service;
