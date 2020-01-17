import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import postList from 'post/list.json'

class PostContainer extends Component {
  constructor(props){
    super(props);
    this.postList = postList.slice();
    let post = this.postList.find(item=>item.id === this.props.match.params.postId)
    this.state = {
      post,
    }
    this.getPostMarkdown = this.getPostMarkdown.bind(this)
  }

  componentDidMount() {
    this.getPostMarkdown()
  }

  async getPostMarkdown(){
    const postId = this.props.match.params.postId
    const file = await import(`../../post/${postId}.md`);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({
        md: text,
    })
  }

  render() {
    return (
      <Post
        post={this.state.post}
        md={this.state.md}
      />);
  }
}

PostContainer.propTypes = {
    match: PropTypes.object.isRequired,
};

export default PostContainer;