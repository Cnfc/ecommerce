import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostContainer = styled.div``;

const PostWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Post = styled.div`
  border: 2px solid black;
  background-color: green;
  padding: 10px;
  margin: 10px;
`;

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await Axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderPosts = () => (
    <PostWrapper>
      {Object.values(posts).map(({ id, title, comments }) => (
        <div key={id}>
          <CommentCreate postId={id} />
          <Post>{title}</Post>
          <CommentList comments={comments} />
        </div>
      ))}
    </PostWrapper>
  );

  return (
    <>
      <h4>PostList</h4>
      <PostContainer>{renderPosts()}</PostContainer>
    </>
  );
};

export default PostList;
