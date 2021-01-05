import React, { useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";

import { Input } from "components/Input/Input";
import { Button } from "components/Buttons/Button";

const FormPostCreate = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  /* padding: 40px; */
`;

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:4000/posts", { title });
    setTitle("");
    console.log(res.data);
  };

  return (
    <FormPostCreate onSubmit={handleSubmit}>
      <h4>Create Post</h4>
      <h6>Title</h6>
      <Input
        name="posts name"
        placeholder="posts name"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <Button>Submit</Button>
    </FormPostCreate>
  );
};

export default PostCreate;
