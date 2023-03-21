import React from "react";
import { Sidebar } from "../components";
import styled from "styled-components";
import img from "../assets/person.jpg";
import { FaUserAlt } from "react-icons/fa";
const Settings = () => {
  return (
    <Wrapper>
      <div className="settings__wrapper">
        <div className="settings__title__container">
          <span className="settings__title">Update Your Account</span>
          <span className="delete__title">Delete Account</span>
        </div>
        <form className="settings__form">
          <label>Profile Picture</label>
          <div className="settings__profile">
            <img src={img} alt="" />
            <label htmlFor="fileInput">
              <FaUserAlt className="file__input" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="seba" />
          <label>Username</label>
          <input type="email" placeholder="some@gmail.com" />
          <label>Password</label>
          <input type="pasword" />
          <button className="settings__submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  .settings__wrapper {
    flex: 9;
    margin: 20px;
  }
  .settings__form {
    display: flex;
    flex-direction: column;
  }
  .settings__form input {
    color: gray;
    margin: 10px 0;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
  }
  .settings__form label {
    font-size: 25px;
  }
  .settings__profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .settings__profile img {
    width: 70px;
    height: 70px;
    border-radius: 15px;
  }
  .settings__title__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
  .settings__title {
    font-size: 2rem;
    color: var(--clr--orange);
  }
  .delete__title {
    color: red;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .file__input {
    font-size: 2rem;
    color: var(--clr--orange);
    cursor: pointer;
  }
  .settings__submit {
    align-self: center;
    border: none;
    border-radius: 10px;
    background-color: teal;
    padding: 10px;
    color: white;
    letter-spacing: 2px;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;
export default Settings;
