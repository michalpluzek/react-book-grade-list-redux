import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Form from "./Form";

import { deleteRate } from "./actions/appActions";

const Element = ({ author, comment, id, rate }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const dispatch = useDispatch();

  const toggleElements = () => setIsVisibleForm((prev) => !prev);

  const deleteElement = () => dispatch(deleteRate(id));

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

export default Element;
