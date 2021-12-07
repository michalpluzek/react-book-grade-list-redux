import React from "react";
import { connect } from "react-redux";

import Element from "./Element";

const List = ({ rates }) => {
  const ratesElements = rates.map((rate) => (
    <Element key={rate.id} {...rate} />
  ));

  return <ul>{ratesElements}</ul>;
};

const connectReduxStateToProps = (store) => ({
  rates: store.rates,
});

const ListConsumer = connect(connectReduxStateToProps)(List);

export default ListConsumer;
