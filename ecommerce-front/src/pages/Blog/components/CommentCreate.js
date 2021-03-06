import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const CommentCreateContainer = styled.form`
  border: 1px solid red;
`;
const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Axios.post(`http://my-app.org/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

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
