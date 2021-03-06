import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  PostTextStyled,
} from 'components/Style/Post'
import { Link } from 'react-router-dom';
import marked from 'marked';

const PostListStyled = styled.div`
`;

const PostPreview = styled.div`
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
    padding: 10px 10px 35px;
  }

  /* min-height: 340px; */
  position: relative;
  margin: 10px 10px 30px 40px;
  padding: 10px 20px 35px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8);
  transition: box-shadow 0.3s ease-in-out 0s;
  /* cursor: pointer; */

  &:hover{
    box-shadow: 0px 10px 5px 0px rgba(225,225,225,0.8);

    &:hover .continue{
      background: #8dc2c2;
      color: #fff;
    }
  }

  img{
    /* max-width: 500px; */
    /* max-height: 300px; */
  }
`;

const Title = styled(Link)`
  display: inline-block;
  font-size: 1.7rem;
  padding: 10px 0;
  letter-spacing: 0.1em;
  line-height: 1.618em;
`;

const DateTime = styled.div`
  padding: 0.8em 0 0.55em;
  color: #777;
  font-size: 0.8em;
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

const ContinueRead = styled(Link)`
  /* position: absolute;
  bottom: 20px;
  right: 20px;
  border: 0px;
  background: #fff;
  color: #61a3a3; */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border: 0px;
  padding: 8px;
  font-size: 0.8em;
  background: #fff;
  color: #61a3a3;
  transition: 0.3s ease-in-out 0s; 
  letter-spacing: 0.1em;
  text-align: center;
`;

const PostList = ({
  postList,
  md
}) => {
  let postItems = postList.slice().map((post,index)=>{
    let tagItems = post.tags.map(tag=>(
      <Tag key={tag}>
        <Link to={`/blog/tag/${tag}`}>{tag}</Link>
      </Tag>
    ))
    return (
      <PostPreview key={post.id}>
        <TagUl>{tagItems}</TagUl>
        <Title to={`/blog/post/${post.id}`}>{post.title}</Title>
        <DateTime>{post.datetime}</DateTime>
        {post.img? <img src={post.img} alt='post img'></img> : null}
        <PostTextStyled
          id="content"
          className="article-detail"
          dangerouslySetInnerHTML={{__html: md[index]? marked(md[index]): ''}}
        />
        <ContinueRead className='continue' to={`/blog/post/${post.id}`}>CONTINUE READING...</ContinueRead>
      </PostPreview>
    )
  }).reverse()
  return (
    <PostListStyled classNameName='container'>
      {postItems}
    </PostListStyled>
  );
};;

PostList.propTypes = {
  postList: PropTypes.array.isRequired,
  md: PropTypes.array.isRequired,
};

export default PostList;