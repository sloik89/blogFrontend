import React from "react";
import styled from "styled-components";
import { Post } from "./";
const Posts = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => {
        console.log(post);
        return <Post key={post._id} post={post} />;
      })}
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
