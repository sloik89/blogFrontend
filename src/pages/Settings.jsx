import React, { useState, useEffect } from "react";
import { Sidebar } from "../components";
import styled from "styled-components";
import img from "../assets/person.jpg";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
const Settings = () => {
  const { user } = useGlobalContext();
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [pswd, setPswd] = useState("");
  const [error, setError] = useState({ error: false, msg: "" });
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ ...error, error: false, msg: "" });
    if (!username || !pswd || !email) {
      console.log("brak dandych");
      setError({ ...error, error: true, msg: "empty data" });
      return;
    }
    const updatedUser = {
      userId: user._id,
      username,
      password: pswd,
      email,
    };
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
      try {
        const pic = await axios.post("/api/localupload", data);
        updatedUser.profilePic = pic.data.url;
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.put(`/api/users/${user._id}`, updatedUser);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      setError({ ...error, error: false, msg: "" });
    }, 2000);
    return () => {
      clearTimeout(interval);
    };
  }, [error]);
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
            {file ? (
              <img src={URL.createObjectURL(file)} alt="" />
            ) : (
              <img src={user.profilePic}></img>
            )}

            <label htmlFor="fileInput">
              <FaUserAlt className="file__input" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="seba"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="some@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input type="password" onChange={(e) => setPswd(e.target.value)} />
          <button
            className="settings__submit"
            type="submit"
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
        {error.error && <p className="error">{error.msg}</p>}
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
  .error {
    margin-top: 2rem;
    text-align: center;
    background-color: #ac7c7c;
    color: white;
    padding: 10px 0;
  }
`;
export default Settings;
