import React from "react";

import Element from "./Element";

const List = ({ rates }) => {
  const ratesElements = rates.map((rate) => (
    <Element key={rate.id} {...rate} />
  ));

  return <ul>{ratesElements}</ul>;
};

export default List;
