import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListStyled = styled.div`
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
    /* padding: 10px 10px 35px; */
  }
  /* padding: 2em 0; */
  margin: 10px 10px 30px 40px;
`;

const PostPreview = styled(Link)`

  /* min-height: 340px; */
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* margin: 0.5em 0; */
  padding: 1em 0;
  border-bottom: 1px dashed #eee;

  &:hover .title{
    color: #61a3a3;
  }

  &:hover .date{
    opacity: 0.7;
  }
`;

const Title = styled.span`
  display: inline-block;
  /* max-width: calc(100% - 250px); */
  flex: 1;
  transition: color 0.2s ease-in-out 0s;
  font-size: 1.1em;
  letter-spacing: 0.1em;
  /* font-size: 1.7rem; */
  /* padding: 10px 0; */
  /* letter-spacing: 0.1em; */
  line-height: 1.618em;
`;

const DateTime = styled.div`
  padding: 0.8em 0 0.55em;
  color: #777;
  font-size: 0.8em;
  margin: 0 0.8em;
  transition: opacity 0.2s ease-in-out 0s;
`;

const TagUl = styled.ul`
  /* margin-bottom: 0.5em; */
  /* position: absolute;
  right: 0; */
  /* width: 120px; */
  text-align: right;
  margin-left: 1em;
`;

const Tag = styled.li`
  display: inline-block;
  border: 1px solid #8dc2c2;
  padding: 3px 3px;
  border-radius: 2px;
  font-size: 0.65em;
  color: #61a3a3;
  margin: 0 2px;
  cursor: pointer;
`;

// const Line = styled.div`
//   height: 1px;
//   margin: 0 auto;
//   width: 90%;
//   background-color: #ddd;
// `;

const List = ({
  postList,
  md
}) => {
  let postItems = postList.slice().map((post,index)=>{
    let tagItems = post.tags.slice(0, 3).map(tag=>(
      <Tag key={tag}>{tag}</Tag>
    ))
    return (
      // <div>
        <PostPreview to={`/blog/post/${post.id}`} key={post.id}>
          <DateTime className='date'>{post.datetime}</DateTime>
          <Title className='title'>{post.title}</Title>
          <TagUl>{tagItems}</TagUl>
        </PostPreview>
          // <Line/>
      // </div>
    )
  }).reverse()
  return (
    <ListStyled classNameName='container'>
      {postItems}
    </ListStyled>
  );
};;

List.propTypes = {
  postList: PropTypes.array.isRequired,
  md: PropTypes.array.isRequired,
};

export default List;