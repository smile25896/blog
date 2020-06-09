import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Header, 
  PostList, 
  RightMenu,
  Post,
} from 'components'

const BlogStyled = styled.div`
`;

const Main = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Blog = () => {
  return (
    <BlogStyled>
      <Header/>
      <Main>
        <Content>
          <Route path="/blog" component={PostList} exact/>
          <Route path="/blog/category/:categoryId" component={PostList} exact/>
          <Route path="/blog/post/:postId" component={Post} exact/>
          {/* <PostList/> */}
        </Content>
        <RightMenu/>
      </Main>
    </BlogStyled>
  );
};

Blog.propTypes = {
};

export default Blog;