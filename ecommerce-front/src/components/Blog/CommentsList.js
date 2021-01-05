import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <ul>
      {comments.map(({ id, content }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  );
};

export default CommentsList;
