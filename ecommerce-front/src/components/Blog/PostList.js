import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

const PostLists = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 20px;
  /* width: 25%; */
`;

const Post = styled.div`
  min-height: 50px;
  /* max-height: 50px; */
  border: 1px solid black;
  width: 25%;
  margin: 30px;
`;

const PostList = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts/");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
    setLoading(false);
  }, []);

  const renderPosts = Object.values(posts);
  console.log(renderPosts);
  return (
    <>
      <h3>Lists of Posts</h3>

      <PostLists>
        {loading
          ? "LOADING"
          : renderPosts.map(({ id, title }) => (
              <Post key={id}>
                <CommentCreate postId={id} title={title} />
              </Post>
            ))}
      </PostLists>
    </>
  );
};

export default PostList;
