import React from "react";
import styled from "styled-components";
import undraw from "../assets/undraw1.svg";
import comp from "../assets/computer3.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Wrapper className="about">
      <div className="about__top">
        <h1 className="about__title">Who we are</h1>
        <p className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          veritatis laudantium velit repellat deleniti aut iure dolores aliquid
          ad. Perspiciatis fugit tempore, exercitationem nulla voluptate
          distinctio aperiam cumque dignissimos hic quisquam. Accusantium eos
          eveniet, cumque, fuga sit veritatis labore atque deserunt ab quis
          nobis suscipit voluptatem! Repellendus, repudiandae tempore cumque a
          impedit eos. Rem hic unde laborum porro ea similique. Atque velit
          distinctio eius totam sint cum obcaecati dolore quis perferendis
          repellendus cupiditate praesentium esse quisquam veritatis, animi eum
          fugit debitis quod expedita reiciendis? Sed quod recusandae alias
          incidunt quae debitis officiis, beatae, quasi ipsum non, magnam
          eveniet atque ex.
        </p>
        <img className="about__img" src={undraw} alt="" />
      </div>
      <div className="about__bottom">
        <div className="about__bottom__left">
          <h2 className="about__bottom__title">
            Why <span>we</span> exsist
          </h2>
          <p className="about__bottom__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis unde, adipisci ipsum eum velit magni ipsa omnis aperiam
            modi repudiandae doloremque quae nihil architecto pariatur facere
            aliquam? In architecto ipsa, eos ipsum iusto quisquam aliquid veniam
            magni amet, blanditiis, provident labore expedita non! Ab maiores
            recusandae quam ipsam officiis? Quibusdam!
          </p>
          <button className="btn">
            <Link className="link" to="/contact">
              Start Working with us
            </Link>
          </button>
        </div>
        <div className="about__img__container">
          <img src={comp} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .about__title {
    font-size: 5rem;
  }
  .about__text {
    font-size: 0.9rem;
    letter-spacing: 2px;
    line-height: 1.5;
  }
  .about__top {
    padding: 2rem;

    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
  }
  .about__bottom {
    padding: 2rem;
    display: flex;
    align-items: center;
    .about__bottom__title {
      font-size: 3rem;
      letter-spacing: 2px;
      font-weight: normal;
      margin-bottom: 1rem;
      span {
        font-weight: bold;
      }
    }
    .btn {
      margin-top: 1rem;
      font-size: 1.2rem;
      padding: 1rem 2rem;
      border: 2px solid black;
      text-transform: uppercase;
      cursor: pointer;
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      .about__bottom__title {
        font-size: 2.5rem;
      }
      .btn {
        font-size: 1rem;
        padding: 0.5rem 1rem;
      }
      .about__bottom__text {
        font-size: 0.9rem;
      }
    }
  }
  .about__bottom__left {
    flex: 1;
  }
  .bottom-img {
    /* width: 20px; */
    /* flex: 1; */
    width: 50%;
    height: 500px;
    object-fit: cover;
  }
  .about__img {
    width: 100%;
    max-width: 500px;
    align-self: center;
    padding: 2rem 0;
  }
`;
export default About;
