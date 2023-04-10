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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const fetchSinglePost = async () => {
      const { data } = await axios.get(`/api/posts/${postId}`);
      console.log(data);
      setPost(data);
      setTitle(data.title);
      setDesc(data.desc);
    };
    fetchSinglePost();
  }, [postId]);
  const handleUpdate = async () => {
    console.log(title, desc);
    console.log("handle update");
    try {
      const data = await axios.put("/api/posts/" + postId, {
        username: user.username,
        title,
        desc,
      });

      console.log(data);
      setEdit(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
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
  console.log(post);
  return (
    <Wrapper>
      <div className="single__post">
        <div className="single__post__wrapper">
          {post.photo && <img src={post.photo} alt="" className="post__img" />}
          <div className="single__post__title">
            {edit ? (
              <input
                value={title}
                className="input-edit"
                type="text"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            ) : (
              <h1>{post.title}</h1>
            )}
            {user?.username === post.username && (
              <div className="single__post__edit">
                <AiFillEdit onClick={() => setEdit(!edit)} />
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
          {edit ? (
            <textarea
              className="textarea-edit"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          ) : (
            <p className="single__post__desc">{post.desc}</p>
          )}
        </div>
        {edit && (
          <button onClick={handleUpdate} className="edit-btn btn">
            Update
          </button>
        )}
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
  .input-edit {
    width: 100%;
    margin: 10px;
    font-size: 20px;
    text-align: center;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid black;
  }
  .input-edit:focus {
    outline: none;
  }
  .textarea-edit {
    width: 100%;
    min-height: 50vh;
  }
  .edit-btn {
    width: 100px;
    background-color: teal;
    color: white;
    padding: 10px;
    font-size: 1.3rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default SinglePost;
