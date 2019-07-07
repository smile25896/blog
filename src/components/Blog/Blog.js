import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header, Home, RightMenu } from 'components'

const BlogStyled = styled.div`
`;

const Main = styled.div`
  display: flex;
`;

const Blog = () => {
  return (
    <BlogStyled>
      <Header/>
      <Main>
        <Home/>
        <RightMenu/>
      </Main>
    </BlogStyled>
  );
};

Blog.propTypes = {
};

export default Blog;