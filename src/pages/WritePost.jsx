import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import placeImg from "../assets/forest.jpg";
import { useGlobalContext } from "../context/context";
import axios from "axios";
const WritePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const { user } = useGlobalContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (!title || !desc || !file) {
      console.log("jestem");
      setError(true);
      return;
    }
    const newPosts = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      // newPosts.photo = filename;
      try {
        const res = await axios.post("/api/upload", data);
        console.log(res);
        newPosts.photo = res.data.url;
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const { data } = await axios.post("/api/posts", newPosts);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [error]);
  return (
    <Wrapper>
      {file && <img src={URL.createObjectURL(file)} alt="" />}
      <div className="write">
        <form className="write__form" onSubmit={handleSubmit}>
          <div className="write__form-group">
            <label htmlFor="fileInput">
              <AiFillPlusCircle className="write__icon" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFile}
            />
            <input
              type="text"
              placeholder="Title"
              className="write__input"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="write__form-group">
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Tell your story..."
              type="text"
              className="write__input write__text"
            ></textarea>
          </div>
          <button type="submit" className="write__submit">
            Publish
          </button>
          {error && <h3>Write correct data</h3>}
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
  .write {
    margin: 20px 0;
  }
  .write__form-group {
    display: flex;
    align-items: center;
  }
  .write__icon {
    font-size: 3rem;
    background-color: transparent;
    color: var(--clr--orange);
    cursor: pointer;
  }
  .write__input {
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 100%;
  }
  .write__input:focus {
    outline: none;
  }
  .write__text {
    min-height: 30vh;
    overflow: auto;
  }
  .write__submit {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: capitalize;
    border: none;
    background-color: var(--clr--orange);
    color: white;
    padding: 0.2rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Roboto";
  }
`;
export default WritePost;
