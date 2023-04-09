import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import placeImg from "../assets/forest.jpg";
import { useGlobalContext } from "../context/context";
import axios from "axios";
const WritePost = () => {
  return (
    <Wrapper>
      <img src={placeImg} alt="" />
      <div className="write">
        <form className="write__form">
          <div className="write__form-group">
            <label htmlFor="fileInput">
              <AiFillPlusCircle className="write__icon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="write__input"
              autoFocus={true}
            />
          </div>
          <div className="write__form-group">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="write__input write__text"
            ></textarea>
          </div>
          <button className="write__submit">Publish</button>
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
