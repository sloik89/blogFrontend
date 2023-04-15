import React from "react";
import styled from "styled-components";
import contact from "../assets/contact.png";
const Contact = () => {
  return (
    <Wrapper className="contact">
      <div className="form__wrapper">
        <h1 className="contact__title">Let's Collaborate</h1>
        <form className="contact__form">
          <div className="form__row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form__row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form__row">
            <label htmlFor="messages">Messages</label>
            <textarea
              name="messages"
              id="messages"
              placeholder="Messages"
            ></textarea>
          </div>
        </form>
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
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export default Contact;
