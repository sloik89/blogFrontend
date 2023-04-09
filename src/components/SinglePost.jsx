import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/computer.jpg";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
const SinglePost = () => {
  const { user } = useGlobalContext();
  const [post, setPost] = useState({});
  const { postId } = useParams();
  console.log(user, post);
  useEffect(() => {
    const fetchSinglePost = async () => {
      const { data } = await axios.get(`/api/posts/${postId}`);
      console.log(data);
      setPost(data);
    };
    fetchSinglePost();
  }, [postId]);
  const handleDelete = async () => {
    console.log("handle delete");
    try {
      const data = await axios.delete("/api/posts/" + postId, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <div className="single__post">
        <div className="single__post__wrapper">
          {post.image && <img src={post.photo} alt="" className="post__img" />}
          <div className="single__post__title">
            <h1>{post.title}</h1>
            {user?.username === post.username && (
              <div className="single__post__edit">
                <AiFillEdit />
                <BsFillTrashFill onClick={handleDelete} />
              </div>
            )}
          </div>
          <div className="single__post__info">
            <span className="single__post__author">
              Author:
              <Link to={`/?user=${post.username}`}>
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="single__post__date">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          <p className="single__post__desc">{post.desc}</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  flex: 9;
  margin: 1rem;
  .post__img {
    height: 300px;
    border-radius: 5px;
  }
  .single__post__title {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      flex-grow: 1;
      text-align: center;
    }
  }
  .single__post__edit {
    display: flex;
    gap: 1rem;
    font-size: 2rem;
    & > * {
      cursor: pointer;
      color: #777171;
    }
    & > *:hover {
      color: var(--clr--orange);
    }
  }
  .single__post__info {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }
  .single__post__desc {
    font-size: 1.1rem;
    color: #5e5959;
    line-height: 30px;
    letter-spacing: 2px;
  }
  .single__post__desc::first-letter {
    margin-left: 1.5rem;
    font-size: 40px;
  }
`;
export default SinglePost;
