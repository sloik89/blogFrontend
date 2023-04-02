import React from "react";
import styled from "styled-components";
import img from "../assets/forest.jpg";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <Wrapper>
      <div className="post">
        {post.photo && <img src={post.photo} alt="" className="post__img" />}
        <div className="post__info flex-center">
          <div className="post__cats">
            {post.categories.map((item) => {
              return <span className="post__cat">{item}</span>;
            })}
          </div>
          <Link className="link" to={`/post/${post._id}`}>
            <span className="post__title">{post.title}</span>
          </Link>
          <hr />
          <span className="post__date">
            {new Date(post.createdAt).toDateString()}
          </span>
          <p className="post__desc">{post.desc}</p>
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
