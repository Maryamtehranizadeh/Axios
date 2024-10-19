import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post.jsx";
import Delete from "./components/Delete.jsx";
import Put from "./components/Put.jsx";
import All from "./components/All.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);
  return (
    <>
      <h1>Axios Library</h1>
      <All />
      <Put />
      <Delete />
      <Post />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
