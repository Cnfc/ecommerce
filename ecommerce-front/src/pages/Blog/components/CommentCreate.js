import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const CommentCreateContainer = styled.form`
  border: 1px solid red;
`;
const CommentCreate = ({ commentId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`http://localhost:4001/posts/${commentId}/comments`, {
      content,
    });

    console.log(content);
    setContent("");
  };

  console.log(commentId);
  return (
    <div>
      <h6>CommentCreate</h6>

      <CommentCreateContainer onSubmit={handleSubmit}>
        <input
          value={content}
          placeholder={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label></label>
        <button>Submit</button>
      </CommentCreateContainer>
    </div>
  );
};

export default CommentCreate;
