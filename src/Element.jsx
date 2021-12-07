import React, { useState } from "react";
import { connect } from "react-redux";

import Form from "./Form";

import { deleteRate } from "./actions/appActions";

const Element = ({ author, comment, id, deleteRate, rate }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => setIsVisibleForm((prev) => !prev);

  const deleteElement = () => deleteRate(id);

  const formOrButtonElement = isVisibleForm ? (
    <Form
      author={author}
      callback={toggleElements}
      comment={comment}
      id={id}
      rate={rate}
    />
  ) : (
    <>
      <button onClick={toggleElements}>Edytuj</button>
      <button onClick={deleteElement}>Usuń</button>
    </>
  );

  return (
    <li>
      <p>Autor oceny: {author}</p>
      <p>Ocena: {rate}</p>
      <p>Komentarz: {comment}</p>
      {formOrButtonElement}
    </li>
  );
};

const connectActionsToProps = { deleteRate };

const ElementConsumer = connect(null, connectActionsToProps)(Element);

export default ElementConsumer;
