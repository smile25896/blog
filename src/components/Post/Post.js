import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
  PostContentStyled,
} from 'components/Style/Post'
import hljs from 'highlight.js';

const PostStyled = styled.div`
  flex: 1;
  margin: 10px 10px 30px 40px;
  padding: 10px 20px;
  /* box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8); */
`;

const Title = styled.h1`
  font-size: 1.7em;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const TagUl = styled.ul`
  margin-bottom: 0.5em;
`;

const Tag = styled.li`
  display: inline-block;
  border: 1px solid #8dc2c2;
  padding: 5px 5px;
  border-radius: 2px;
  font-size: 0.75em;
  color: #61a3a3;
  margin: 0 2px;
`;

const DateTime = styled.div`
  margin-bottom: 20px;
  color: #999;
  font-size: 1em;
`;

const Post = ({
  postList,
  post,
}) => {
  let html = post.html;
  const testHtml = document.createElement('body')
  testHtml.innerHTML = html
  let codes = testHtml.querySelectorAll('code')
  codes.forEach(code=>{
    hljs.highlightBlock(code)
  })
  let tagItems = post.tags.map(tag=>(
    <Tag key={tag}>{tag}</Tag>
  ))
  // return (
  //   <Post key={post.id}>
  //     {/* <TagUl>{tagItems}</TagUl> */}
  //     {/* <Title to={`/blog/post/${post.id}`}>{post.title}</Title> */}
  //     {/* <DateTime>{post.datetime}</DateTime> */}
  //     {/* <img src='/image/01.png'></img> */}
  //     <PostText dangerouslySetInnerHTML={{__html: testHtml.innerHTML}}/>
  //     {/* <Text>{post.text}</Text> */}
  //   </Post>
  // )
  return (
    <PostStyled>
      <TagUl>
        {tagItems}
      </TagUl>
      <Title>{post.title}</Title>
      <DateTime>{post.datetime}</DateTime>
      <PostContentStyled key={post.id} dangerouslySetInnerHTML={{__html: testHtml.innerHTML}}/>
    </PostStyled>
  );
};

Post.propTypes = {
  postList: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
};

export default Post;