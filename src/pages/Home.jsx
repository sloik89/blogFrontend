import React, { useState, useEffect } from "react";
import { Hero, Posts, Sidebar } from "../components";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Home = () => {
  const { search } = useLocation();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`/api/posts/${search}`);
      setPosts(data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Hero />
      <Wrapper>
        <Posts posts={posts} />
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
