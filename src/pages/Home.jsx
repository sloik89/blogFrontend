import React from "react";
import { Hero, Posts, Sidebar } from "../components";
import styled from "styled-components";
const Home = () => {
  return (
    <>
      <Hero />
      <Wrapper>
        <Posts />
        <Sidebar />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
export default Home;
