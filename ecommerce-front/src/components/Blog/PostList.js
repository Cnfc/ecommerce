import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

import { TitleOfPage } from "components/Blog/styles/TitlePfPage";

const PostLists = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 20px;
  width: 100%;
`;

const Post = styled.div`
  min-height: 50px;
  /* max-height: 50px; */
  border: 1px solid ${(p) => p.theme.bodyFontColor};
  margin: 30px;
  max-width: 26%;
  min-width: 25%;
`;

const PostList = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
    setLoading(false);
  }, []);

  const renderPosts = Object.values(posts);
  console.log("All posts:", posts);
  return (
    <>
      <TitleOfPage>Lists of Posts</TitleOfPage>

      <PostLists>
        {loading
          ? "LOADING"
          : renderPosts.map(({ id, title, comments, status }) => (
              <Post key={id}>
                <CommentCreate postId={id} title={title} comments={comments} />
                <CommentsList comments={comments} status={status} />
              </Post>
            ))}
      </PostLists>
    </>
  );
};

export default PostList;
