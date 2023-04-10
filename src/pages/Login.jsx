import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import bg from "../assets/login.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const Login = () => {
  const { loginForm, msg, error } = useGlobalContext();

  const userRef = useRef();
  const pswdRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: userRef.current.value,
      password: pswdRef.current.value,
    };
    if (!user.username || !user.password) {
      console.log("jestem");
      return;
    }
    loginForm(user);
  };
  useEffect(() => {
    if (error) {
      const interval = set;
    }
  }, [error]);
  return (
    <Wrapper>
      <div className="login">
        <h3 className="login__title">Login</h3>
        <form className="login__form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username..."
            ref={userRef}
          />
          <label>Pasword</label>
          <input
            type="text"
            placeholder="Enter your pasword..."
            ref={pswdRef}
          />
          {error && <p className="error-msg">{msg}</p>}
          <button className="login_btn">Login</button>
        </form>
        <button type="submit" className="register_btn">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .login {
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${bg});
    background-position: center/center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 2;
  }
  .login::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .login__form {
    display: flex;
    flex-direction: column;
  }
  .login__form label {
    margin: 10px 0;
    font-size: 20px;
    letter-spacing: 2px;
    color: white;
  }
  .login__form input {
    padding: 10px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
  }
  .login__title {
    font-size: 3rem;
    color: #f1e8de;
  }
  .login_btn {
    background-color: var(--clr--orange);
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
    letter-spacing: 2px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .register_btn {
    background-color: var(--clr--orange);
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
    letter-spacing: 2px;
    border: none;
    border-radius: 5px;
    width: 190px;
    cursor: pointer;
  }
  .error-msg {
    font-size: 1.2rem;
    background-color: #e09393;
    color: white;
    letter-spacing: 2px;
    text-align: center;
    padding: 5px 0;
    margin-top: 1rem;
  }
`;

export default Login;
