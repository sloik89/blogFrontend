import React from "react";
import styled from "styled-components";
import { Post } from "./";
const Posts = () => {
  return (
    <Wrapper>
      <Post />
      <Post />
      <Post />
      <Post />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 20px 0;
  flex: 6;
  display: flex;
  flex-wrap: wrap;
`;
export default Posts;
