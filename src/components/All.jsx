import React from "react";
import axios from "axios";
import { useEffect } from "react";

function All() {
  useEffect(() => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/todos"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ])
      .then((res) => console.log(res));
  }, []);
  return (
    <div>
      <h3>Simultanous request</h3>
    </div>
  );
}

export default All;
