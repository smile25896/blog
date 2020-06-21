import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
  PostContentStyled,
} from 'components/Style/Post'
import marked from 'marked';
// import test from '../../post/test.md'
import { Link } from 'react-router-dom';

const PostStyled = styled.div`
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
    padding: 10px 10px 35px;
  }

  /* width: 0; */
  margin: 10px 10px 60px 40px;
  padding: 10px 20px;
  /* box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8); */
`;

const Title = styled.h1`
  font-size: 1.7em;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.618em;
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
  cursor: pointer;
`;

const DateTime = styled.div`
  margin-bottom: 20px;
  color: #999;
  font-size: 1em;
`;

const PrevNextDiv = styled.div`
  font-size: 0.8em;
  line-height: 2em;

  & a:hover{
    opacity: 0.6
  }
`;

const Post = ({
  postList,
  postIndex,
  md,
}) => {
  let post = postList[postIndex]
  let tagItems = post.tags.map(tag=>(
    <Tag key={tag}>{tag}</Tag>
  ))
  return (
    <PostStyled>
      <TagUl>
        {tagItems}
      </TagUl>
      <Title>{post.title}</Title>
      <DateTime>{post.datetime}</DateTime>
      {/* <ReactMarkdown source={md} /> */}
      <PostContentStyled
        id="content"
        className="article-detail"
        dangerouslySetInnerHTML={{__html: md? marked(md): ''}}
      />
      <PrevNextDiv>
        {postIndex>0 && (
          <div>
            上一篇：<Link to={`/blog/post/${postList[postIndex-1].id}`}>{postList[postIndex-1].title}</Link>
          </div>
        )}
        {postIndex+1<postList.length && (
          <div>
            下一篇：<Link to={`/blog/post/${postList[postIndex+1].id}`}>{postList[postIndex+1].title}</Link>
          </div>
        )}
      </PrevNextDiv>
    </PostStyled>
  );
};

Post.propTypes = {
  postList: PropTypes.array.isRequired,
  postIndex: PropTypes.number.isRequired,
  md: PropTypes.string,
};

export default Post;