import React, { useState } from "react";

const Form = ({ author = "", callback, comment = "", id, rate = 0 }) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [commentInput, setCommentInput] = useState(comment);
  const [rateInput, setRateInput] = useState(rate);

  const handleAuthorChange = (e) => setAuthorInput(e.target.value);

  const handleCommentChange = (e) => setCommentInput(e.target.value);

  const handleRateChange = (e) => setRateInput(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!authorInput.length) return;

    const rateObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };

    if (id) {
      callback();
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          Autor:
          <input
            onChange={handleAuthorChange}
            type="text"
            value={authorInput}
          />
        </label>
      </div>
      <div>
        <label>
          Ocena:
          <input onChange={handleRateChange} type="number" value={rateInput} />
        </label>
      </div>
      <div>
        <label>
          Komentarz:
          <input
            onChange={handleCommentChange}
            type="text"
            value={commentInput}
          />
        </label>
      </div>
      <button type="submit">{id ? "Edycja oceny" : "Dodaj ocenę"}</button>
    </form>
  );
};

export default Form;
