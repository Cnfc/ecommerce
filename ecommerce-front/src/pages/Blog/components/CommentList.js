import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const CommentList = ({ commentId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await Axios.get(
      `http://localhost:4001/posts/${commentId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return (
    <>
      <h5>CommentList</h5>
      <ul>{renderedComments}</ul>
    </>
  );
};

export default CommentList;
