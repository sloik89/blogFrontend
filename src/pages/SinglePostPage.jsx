import React from "react";
import { Sidebar, SinglePost } from "../components";
import styled from "styled-components";
const SinglePostPage = () => {
  return (
    <Wrapper>
      <div className="single-post">
        <SinglePost />
        <Sidebar />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .single-post {
    display: flex;
    align-items: flex-start;
  }
`;
export default SinglePostPage;
