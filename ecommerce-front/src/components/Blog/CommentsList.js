import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsList = ({ postId }) => {
  const [listOfComments, setListOfComments] = useState([]);

  const getComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setListOfComments(res.data);
  };
  console.log(listOfComments);

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      {listOfComments.map(({ id, content }) => (
        <div key={id}>{content}</div>
      ))}
    </div>
  );
};

export default CommentsList;
