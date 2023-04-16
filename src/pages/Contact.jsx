import React, { useState, useEffect } from "react";
import styled from "styled-components";
import contact from "../assets/contact.png";
import axios from "axios";
import Loader from "../components/loader";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError(false);
    const data = new FormData(e.currentTarget);
    const values = [...data.values()];
    const isEmpty = values.includes("");
    const dataTosend = Object.fromEntries(data);
    if (isEmpty) {
      console.log("uzupeplnil pola");
      setError(true);
      setLoading(false);
      return;
    }
    try {
      const data = await axios.post("/api/email", dataTosend);
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    console.log(dataTosend);
    // e.currentTarget.reset();
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [error]);
  return (
    <Wrapper className="contact">
      <div className="form__wrapper">
        <h1 className="contact__title">Let's Collaborate</h1>
        <form className="contact__form" onSubmit={handleForm}>
          <div className="form__row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form__row">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form__row">
            <label htmlFor="messages">Messages</label>
            <textarea
              name="messages"
              id="messages"
              placeholder="Messages"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            {loading ? <Loader /> : "send"}
          </button>
        </form>
        {error && <p className="contact__msg">Please fill up all fields</p>}
      </div>
      <div className="image__wrapper">
        <img src={contact} alt="" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  .contact__msg {
    background-color: var(--clr--orange);
    color: white;
    letter-spacing: 2px;
    padding: 0.2rem 0;
    margin-top: 2rem;
    text-align: center;
  }
  .contact__title {
    margin-bottom: 2rem;
  }
  .form__wrapper {
    padding: 1rem;
    flex-grow: 1;
    max-width: 800px;
  }
  .contact__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .form__row {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      label {
        font-size: 1.1rem;
        letter-spacing: 2px;
        font-weight: bold;
      }
      input {
        font-size: 1.1rem;
        padding: 1rem;
        border: none;
        border-bottom: 2px solid black;
        &:focus {
          outline: none;
        }
      }
      textarea {
        height: 200px;
        border: 2px solid black;
        padding: 1rem;
      }
    }
  }
  .btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    font-size: 1.2rem;
    border: 1px solid black;
    padding: 0.3rem 1rem;
    align-self: flex-start;
    cursor: pointer;
    background-color: var(--clr--orange);
    color: white;
    border: none;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-radius: 5px;
    transition: transform 0.2s linear;
    &:hover {
      transform: translateY(-10px);
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export default Contact;
