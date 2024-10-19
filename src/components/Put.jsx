import React, { useState } from "react";
import axios from "axios";

function Put() {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const putHandler = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
      .then((res) => console.log(res));
  };
  const patchHandler = () => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h4>Put</h4>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={putHandler}>Update with Put</button>
      <button onClick={patchHandler}>Update with Patch</button>
    </div>
  );
}

export default Put;
