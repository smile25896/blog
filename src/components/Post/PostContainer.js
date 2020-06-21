import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import postList from 'post/list.json'

class PostContainer extends Component {
  constructor(props){
    super(props);
    this.postList = postList.slice();
    let postIndex
    this.postList.some((item, index)=>{
      if(item.id === this.props.match.params.postId){
        postIndex = index
        return true
      }
      return false
    })
    document.title = this.postList[postIndex].title
    this.state = {
      postIndex,
      urlKey: this.props.location.key
    }
    this.getPostMarkdown = this.getPostMarkdown.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0,0)
    this.getPostMarkdown()
  }

  componentDidUpdate(){
    let urlKey = this.props.location.key
    if(urlKey !== this.state.urlKey){
      window.scrollTo(0,0)
      let postIndex
      this.postList.some((item, index)=>{
        if(item.id === this.props.match.params.postId){
          postIndex = index
          return true
        }
        return false
      })
      this.setState({
        postIndex,
        urlKey,
      })
      this.getPostMarkdown()
      document.title = this.postList[postIndex].title
    }
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
        postList={this.postList}
        postIndex={this.state.postIndex}
        md={this.state.md}
      />);
  }
}

PostContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PostContainer;