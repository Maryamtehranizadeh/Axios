import React from "react";
import axios from "axios";
import { useState } from "react";

function Delete() {
  const [id, setId] = useState("");
  const deleteHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <h4>Delete</h4>
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Delete;
