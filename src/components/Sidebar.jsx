import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/ABOU1.jpg";
import { BsFacebook, BsPinterest, BsSearch } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get("/api/category");
      setCategory(data);
    };
    fetchCategory();
  }, []);

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
          {category.map((item) => {
            return (
              <Link key={item._id} to={`/?cat=${item.name}`} className="link">
                <li className="sidebar__list__item">{item.name}</li>
              </Link>
            );
          })}
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
