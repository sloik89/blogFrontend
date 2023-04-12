import React from "react";
import styled from "styled-components";
import { Post } from "./";
const Posts = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 20px 0;
  flex: 9;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid black;
`;
export default Posts;
