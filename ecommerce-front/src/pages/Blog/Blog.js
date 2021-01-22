import React from "react";
import styled, { css } from "styled-components";

import PageLayout from "layouts/PageLayout";
import PostList from "components/Blog/PostList";
import PostCreate from "components/Blog/PostCreate";

import { TitleOfPage } from "components/Blog/styles/TitlePfPage";

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

const Blog = () => {
  return (
    <PageLayout>
      <TitleOfPage>Blog Posts</TitleOfPage>
      {/* <Posts>
        <PostCreate />
        <PostList />
      </Posts> */}
    </PageLayout>
  );
};

export default Blog;
