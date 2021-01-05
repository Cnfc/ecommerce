import React, { useState, useEffect } from "react";
import { Input } from "components/Input/Input";
import styled from "styled-components";

import { Button } from "components/Buttons/Button";
import axios from "axios";
import CommentsList from "./CommentsList";

const FormOfComment = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentCreate = ({ postId, title }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      {
        content,
      }
    );
    setContent("");
  };
  return (
    <FormOfComment onSubmit={handleSubmit}>
      <h4>{title}</h4>
      <CommentsList postId={postId} />

      <Input
        name="commentCreate"
        placeholder="New Comment"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        type="text"
      />
      <Button>Submit</Button>
    </FormOfComment>
  );
};

export default CommentCreate;
