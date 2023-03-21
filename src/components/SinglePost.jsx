import React from "react";
import styled from "styled-components";
import img from "../assets/computer.jpg";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
const SinglePost = () => {
  return (
    <Wrapper>
      <div className="single__post">
        <div className="single__post__wrapper">
          <img src={img} alt="" className="post__img" />
          <div className="single__post__title">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div className="single__post__edit">
              <AiFillEdit />
              <BsFillTrashFill />
            </div>
          </div>
          <div className="single__post__info">
            <span className="single__post__author">
              Author: <b>Seba</b>
            </span>
            <span className="single__post__date">1 hour ago</span>
          </div>
          <p className="single__post__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, quasi? Aliquam rem dolores pariatur magnam ea placeat
            commodi! Magni veritatis dolore iusto similique facere pariatur
            aliquid excepturi at laudantium nam saepe mollitia obcaecati
            consequatur, rem iste eligendi maxime voluptas cupiditate! Sequi
            reprehenderit quibusdam reiciendis soluta nobis natus dolores
            consequuntur quisquam, facilis ab deleniti incidunt perferendis
            eligendi inventore totam rem maxime. Illum pariatur deleniti
            doloribus necessitatibus et quidem voluptatibus reiciendis eos
            impedit officiis, magni vero quis qui libero quia quae nam suscipit
            voluptate amet sequi. Magnam, non ipsam blanditiis tempora nobis
            facilis accusamus perspiciatis quidem, recusandae beatae sit sequi
            fuga consequatur!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  flex: 9;
  margin: 1rem;
  .post__img {
    height: 300px;
    border-radius: 5px;
  }
  .single__post__title {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      flex-grow: 1;
      text-align: center;
    }
  }
  .single__post__edit {
    display: flex;
    gap: 1rem;
    font-size: 2rem;
    & > * {
      cursor: pointer;
      color: #777171;
    }
    & > *:hover {
      color: var(--clr--orange);
    }
  }
  .single__post__info {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }
  .single__post__desc {
    font-size: 1.1rem;
    color: #5e5959;
    line-height: 30px;
    letter-spacing: 2px;
  }
  .single__post__desc::first-letter {
    margin-left: 1.5rem;
    font-size: 40px;
  }
`;
export default SinglePost;
