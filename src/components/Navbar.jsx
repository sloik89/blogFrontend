import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFacebook, BsPinterest, BsSearch } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { useGlobalContext } from "../context/context";
const Navbar = () => {
  const { user, logout } = useGlobalContext();
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

              <li className="top__center__item">
                <Link to="about" className="link">
                  About
                </Link>
              </li>

              <li className="top__center__item">
                <Link to="contact" className="link">
                  CONTACT
                </Link>
              </li>

              <li className="top__center__item">
                <Link className="link" to="write">
                  Write
                </Link>
              </li>
              <li onClick={logout} className="top__center__item">
                {user && "Logout"}
              </li>
            </ul>
          </div>
          <div className="top__right flex-center">
            {user ? (
              <Link to="/settings">
                <img src={user.profilePic} className="profile-img" />
              </Link>
            ) : (
              <>
                <Link className="link auth" to="login">
                  Login
                </Link>
                <Link className="link auth" to="register">
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
    @media screen and (max-width: 800px) {
       {
        display: none;
      }
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
  .auth {
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 800px) {
    .top,
    .auth {
      font-size: 0.9rem;
    }
    .top__center__list {
      justify-content: flex-start;
      padding-left: 1rem;
    }
  }
`;
export default Navbar;
