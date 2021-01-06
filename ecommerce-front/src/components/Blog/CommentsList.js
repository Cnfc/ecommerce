import React from "react";

const CommentsList = ({ comments }) => {
  const checkStatus = (status) => {
    switch (status) {
      case "pending":
        return <span>?</span>;
      case "approved":
        return <span>+</span>;
      case "rejected":
        return <span>-</span>;
    }
  };

  return (
    <ul>
      {comments.map(({ id, content, status }) => (
        <li key={id}>
          {content} status:{checkStatus(status)}
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
