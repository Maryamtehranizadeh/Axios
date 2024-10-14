import React, { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  const [title, setTitle] = useState("");
  const postHandler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { title })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <h2>Post by Axios</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={postHandler}>Create Post</button>
    </div>
  );
}

export default Post;
