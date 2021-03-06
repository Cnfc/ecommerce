import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const PostCreateContainer = styled.form`
  border: 2px solid green;
`;

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);

    if (title.length > 3) {
      Axios.post("http://my-app.org/posts", { title });
    }
    setTitle("");
  };

  return (
    <div>
      <h5>PostCreate</h5>
      <PostCreateContainer onSubmit={handleSubmit}>
        <input
          value={title}
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label></label>
        <button>Submit</button>
      </PostCreateContainer>
    </div>
  );
};

export default PostCreate;
