import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFacebook, BsPinterest, BsSearch } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  const user = false;
  return (
    <nav className="nav">
      <Wrapper>
        <div className="top flex-center">
          <div className="top__left flex-center">
            <BsFacebook />
            <BsPinterest />
            <AiFillInstagram />
            <AiFillTwitterCircle />
          </div>
          <div className="top__center">
            <ul className="top__center__list flex-center">
              <li className="top__center__item">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li className="top__center__item">About</li>
              <li className="top__center__item">CONTACT</li>
              <li className="top__center__item">{user && "Logout"}</li>
              <li className="top__center__item">Write</li>
            </ul>
          </div>
          <div className="top__right flex-center">
            {user ? (
              <div className="profile-img"></div>
            ) : (
              <>
                <Link className="link" to="login">
                  Login
                </Link>
                <Link className="link" to="register">
                  Register
                </Link>
              </>
            )}

            <button className="search btn">
              <BsSearch />
            </button>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
const Wrapper = styled.div`
  .top {
  }
  .top__left {
    flex: 3;
    gap: 1rem;
    & > * {
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
  .top__right {
    flex: 3;
    gap: 1rem;
    .search {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
  .top__center {
    text-transform: uppercase;
    font-weight: bold;

    flex: 6;
    .top__center__list {
      gap: 1rem;
    }
  }
  .profile-img {
    width: 40px;
    height: 40px;
    background-color: #ddd;
    border-radius: 50%;
  }
`;
export default Navbar;
