import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsList = ({ postId }) => {
  const [listOfComments, setListOfComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setListOfComments(res.data);
  };
  console.log(listOfComments);

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <ul>
      {listOfComments.map(({ id, content }) => (
        <li key={id}>{content}</li>
      ))}
    </ul>
  );
};

export default CommentsList;
