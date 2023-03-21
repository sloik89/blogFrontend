import React from "react";
import styled from "styled-components";
import img from "../assets/forest.jpg";
const Post = () => {
  return (
    <Wrapper>
      <div className="post">
        <img src={img} alt="" className="post__img" />

        <div className="post__info flex-center">
          <div className="post__cats">
            <span className="post__cat">Music</span>
            <span className="post__cat">Life</span>
          </div>
          <h3 className="post__title">Lorem ipsum dolor sit amet co.</h3>
          <hr />
          <span className="post__date">1 hour ago</span>
          <p className="post__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            reiciendis exercitationem ipsum quisquam dolor quae.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 380px;
  border-radius: 7px;
  .post {
    margin: 0px 25px 40px 25px;
  }
  .post__img {
    height: 200px;
    border-radius: 7px;
  }
  .post__info {
    flex-direction: column;
  }
  .post__cat {
    line-height: 20px;
    font-size: 0.9rem;
    color: var(--clr--orange);
    cursor: pointer;
    margin-right: 15px;
    margin-top: 15px;
    font-weight: bold;
  }
  .post__title {
    font-size: 22px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;
    letter-spacing: 1px;
  }
  .post__date {
    color: #999;
    font-size: 13px;
    font-style: italic;
    margin-top: 15px;
  }
  hr {
    width: 100%;
  }
  .post__desc {
    line-height: 24px;
    margin-top: 15px;
  }
`;
export default Post;
