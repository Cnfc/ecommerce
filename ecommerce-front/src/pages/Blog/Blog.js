import React from "react";
import styled, { css } from "styled-components";
import i18next from "i18next";

import PageLayout from "layouts/PageLayout";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";

import { TitleOfPage } from "./components/styles/TitlePfPage";

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
      <Posts>
        <PostCreate />
        <PostList />
      </Posts>
    </PageLayout>
  );
};

export default Blog;
