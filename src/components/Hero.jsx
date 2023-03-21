import React from "react";
import heroImg from "../assets/hero.jpg";
import styled from "styled-components";
const Hero = () => {
  return (
    <Wrapper>
      <div className="header">
        <div className="header__titles flex-center">
          <span className="header__title_sm">React & Node</span>
          <span className="header__title_lg">Blog</span>
        </div>
        <img src={heroImg} alt="" className="header__img" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 5rem;

  .header__titles {
    flex-direction: column;
    gap: 1rem;
    letter-spacing: 2px;
    position: absolute;
    top: 10%;
    left: calc(50%);
    transform: translateX(-50%);
    color: #d48012;
    font-weight: bold;

    .header__title_sm {
      font-size: 3rem;
    }
    .header__title_lg {
      font-size: 5rem;
    }
  }
  .header__img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    margin-top: 50px;
  }
`;
export default Hero;
