import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import postList from 'post/list.json'

class PostContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.postList = postList.slice();
  }

  render() {
    let post = this.postList.find(item=>item.id === this.props.match.params.postId)
    return (
      <Post
        postList={this.postList}
        post={post}
      />);
  }
}

PostContainer.propTypes = {
    match: PropTypes.object.isRequired,
};

export default PostContainer;