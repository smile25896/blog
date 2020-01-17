import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Header, 
  Home, 
  RightMenu,
  Post,
} from 'components'

const BlogStyled = styled.div`
`;

const Main = styled.div`
  display: flex;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Blog = () => {
  return (
    <BlogStyled>
      <Header/>
      <Main>
        <Route path="/blog" component={Home} exact/>
        <Route path="/blog/post/:postId" component={Post} exact/>
        {/* <Home/> */}
        <RightMenu/>
      </Main>
    </BlogStyled>
  );
};

Blog.propTypes = {
};

export default Blog;