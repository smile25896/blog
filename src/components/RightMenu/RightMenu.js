import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RightMenuStyled = styled.div`
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }

  width: 280px;
  min-width: 250px;
  padding: 10px;
`;

const Block = styled.div`
  padding: 0.5em;
  margin-bottom: 2em;
  font-size: 0.85rem;

  /* &:hover{
    box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8);
  } */
`;

const Title = styled.div`
  font-size: 1rem;
  padding: 0.7em 1em;
  border: 1px solid #8dc2c2;
  text-align: center;
  letter-spacing: 0.1em;
  margin-bottom: 0.5em;
`;

const SecondTitle = styled.div`
  font-size: 1.1rem;
  line-height: 2em;
`;

const Content = styled.div`
  line-height: 1.5em;
`;

const Ul = styled.ul`
  margin: 1em 0;

  li{
    line-height: 2em;
  }
`;

const RightMenu = ({
  postList,
}) => {
  let recentPosts = postList.slice().reverse().slice(0, 10);
  recentPosts = recentPosts.map(post=>(
    <li key={post.id}>
      <Link to={`/blog/post/${post.id}`}>
        {post.title}
      </Link>
    </li>
  ))
  return (
    <RightMenuStyled>
      <Block>
        <Title>ABOUT ME</Title>
        <Content>
          <SecondTitle>Cathy Peng</SecondTitle>
          {/* 現職前端工程師<br/>
          喜歡設計、喜歡程式，希望自己能保持這樣的熱情一直學習下去！<br/> */}
        </Content>
      </Block>
      <Block>
        <Title>RECENT POSTS</Title>
        <Ul>
          {recentPosts}
        </Ul>
      </Block>
    </RightMenuStyled>
  );
};

RightMenu.propTypes = {
};

export default RightMenu;