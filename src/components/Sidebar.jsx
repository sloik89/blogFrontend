import React from "react";
import styled from "styled-components";
import img from "../assets/ABOU1.jpg";
import { BsFacebook, BsPinterest, BsSearch } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
const Sidebar = () => {
  return (
    <Wrapper className="sidebar flex-center">
      <div className="sidebar__item">
        <h3>ABOUT ME</h3>
        <img className="sidebar__img" src={img} alt="" />
        <p className="text-main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          reiciendis!
        </p>
      </div>
      <div className="sidebar__item">
        <h3>CATEGORIES</h3>
        <ul className="sidebar__list">
          <li className="sidebar__list__item">MUSIC</li>
          <li className="sidebar__list__item">LIFE</li>
          <li className="sidebar__list__item">STYLE</li>
          <li className="sidebar__list__item">SPORT</li>
          <li className="sidebar__list__item">TECH</li>
          <li className="sidebar__list__item">CINEMA</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <h3>FALLOW US</h3>
        <div className="sidebar__social flex-center">
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsPinterest />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  flex: 3;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .sidebar__img {
    aspect-ratio: 2/1;
    object-fit: cover;
    display: block;
    width: 100%;
    padding: 10px;
  }
  h3 {
    text-align: center;
    margin: 10px 0;
    padding: 10px 0;
    letter-spacing: 2px;
    border-bottom: 1px solid #d48012;
    border-top: 1px solid #d48012;
  }
  p {
    padding: 10px 0;
  }
  .sidebar__list__item {
    display: inline-block;
    width: 50%;
    text-align: center;
    margin-top: 15px;
    cursor: pointer;
  }
  .sidebar__social {
    margin-top: 15px;
    width: 250px;
    gap: 1rem;
    a {
      font-size: 1.5rem;
      color: #d48012;
    }
  }
`;
export default Sidebar;
