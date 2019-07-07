import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Blog from './Blog';

class BlogContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Blog/>);
  }
}

BlogContainer.propTypes = {
};

export default BlogContainer;