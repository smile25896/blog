import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
  Post,
  PostText,
} from 'components/Style/Post'
import hljs from 'highlight.js';

const HomeStyled = styled.div`
  flex: 1;
  /* display: flex;
  flex-wrap: wrap; */
`;

const PostPreview = styled.div`
  /* max-width: 850px; */
  margin: 0px 10px 30px 40px;
  padding: 20px 20px;
  /* border-bottom: 2px #eee solid; */
  box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8);

  img{
    max-width: 500px;
    max-height: 300px;
  }
`;

const Title = styled.h1`
  font-size: 1.7rem;
  padding: 0.2em 0;
`;

const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const DateTime = styled.div`
  padding: 0.8em 0 0.55em;
  color: #777;
  font-size: 0.8em;
`;

const Tag = styled.span`
  background: #8dc2c2;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 0.7em;
  color: #fff;
  margin: 0 2px;
`;

const Text = styled.div`
  padding: 0.5em 0;
  line-height: 1.5rem;
  color: #535353;
`;

const Home = ({
  postList
}) => {
  let postItems = postList.map(post=>{
    let html = post.text;
    const testHtml = document.createElement('body')
    testHtml.innerHTML = html
    let codes = testHtml.querySelectorAll('code')
    codes.forEach(code=>{
      hljs.highlightBlock(code)
    })
    let tagItems = post.tags.map(tag=>(
      <Tag key={tag}>{tag}</Tag>
    ))
    return (
      <PostPreview key={post.id}>
        <Title>{post.title}</Title>
        <Intro>
          <DateTime>{post.datetime}</DateTime>
          <div>{tagItems}</div>
        </Intro>
        <img src='/image/01.png'></img>
        <PostText dangerouslySetInnerHTML={{__html: testHtml.innerHTML}}/>
        {/* <Text>{post.text}</Text> */}
      </PostPreview>
    )
  })
  return (
    <HomeStyled classNameName='container'>
      {postItems}
    </HomeStyled>
  );
};;

Home.propTypes = {
  postList: PropTypes.array.isRequired,
};

export default Home;