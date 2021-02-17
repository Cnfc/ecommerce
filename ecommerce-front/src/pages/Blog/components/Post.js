import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import Fade from "components/Animate/Fade";
import Slide from "components/Animate/Slide";

const SinglePost = styled.div`
  border: 2px solid black;
  background-color: green;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

const Post = ({ id, title, comments }) => {
  const [isToggledPost, setIsToggledPost] = useState(false);
  const [showInput, setShowInput] = useState(false);
  return (
    <div>
      <SinglePost onClick={() => setIsToggledPost(!isToggledPost)}>
        {title}
      </SinglePost>

      <motion.div layout>
        {isToggledPost && (
          <>
            <motion.div layout onClick={() => setShowInput(!showInput)}>
              <Fade>
                <CommentList comments={comments} />
              </Fade>
            </motion.div>
            {showInput && (
              <motion.div key={id} layout>
                <CommentCreate postId={id} />
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Post;
