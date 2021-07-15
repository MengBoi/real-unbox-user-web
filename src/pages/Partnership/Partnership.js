import React from "react";
import PartnershipUI from "./PartnershipUI";
import { createBrowserHistory } from "history";

const Partnership = () => {
  const history = createBrowserHistory({ forceRefresh: true });
  const onReadMoreClick = () => {
    history.push("./PartnerDetails");
  };
  return <PartnershipUI onReadMoreClick={onReadMoreClick} />;
};

export default Partnership;
