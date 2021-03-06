import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import Post from "./Post";

const PostContainer = styled.div``;

const PostWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  width: 30px;
  background-color: red;
  height: 40px;
`;

const PostList = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    const res = await Axios.get("http://my-app.org/posts");
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // console.log(posts);

  const renderPosts = () => (
    <PostWrapper>
      {Object.values(posts).map(({ id, title, comments }) => (
        <Post key={id} id={id} title={title} comments={comments} />
      ))}
    </PostWrapper>
  );

  return (
    <>
      <h4>PostList</h4>
      {loading ? <Loading /> : null}

      <PostContainer>{renderPosts()}</PostContainer>
    </>
  );
};

export default PostList;
