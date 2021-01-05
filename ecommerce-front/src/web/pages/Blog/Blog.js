import React from "react";
import styled, { css } from "styled-components";

import PageLayout from "core/PageLayout";
import PostList from "components/Blog/PostList";
import PostCreate from "components/Blog/PostCreate";

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Blog = () => {
  return (
    <PageLayout>
      <h1>Blog Posts</h1>
      <div>Posts</div>
      <Posts>
        <PostCreate />
        <PostList />
      </Posts>
    </PageLayout>
  );
};

export default Blog;
