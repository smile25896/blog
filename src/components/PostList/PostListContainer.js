import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';
import postList from 'post/list.json'

class PostListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      md: [],
      postList: [],
      urlKey: this.props.location.key
    }
    this.postList = postList.slice()
    this.getPostList = this.getPostList.bind(this)
    this.getPostMarkdown = this.getPostMarkdown.bind(this)
  }

  componentDidMount(){
    document.title = 'Cathy P'
    this.getPostList()
    window.scrollTo(0,0)
  }

  componentDidUpdate(){
    let urlKey = this.props.location.key
    if(urlKey !== this.state.urlKey){
      window.scrollTo(0,0)
      this.setState({
        urlKey,
      })
      this.getPostList()
    }
  }

  getPostList(){
    let postList;
    let categoryId = this.props.match.params.categoryId
    let urltag = this.props.match.params.tag
    if(categoryId){
      postList = this.postList.filter(post=>post.category === categoryId)
    }
    else if(urltag){
      postList = this.postList.filter(post=>post.tags.some(tag=>tag===urltag))
    }
    else{
      postList = this.postList
    }
    postList.forEach((post,index)=>{
      this.getPostMarkdown(post.id, index)
    })
    this.setState({
      postList
    })
  }

  async getPostMarkdown(id, index){
    try{
      const file = await import(`../../description/${id}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      let md = this.state.md.slice()
      md[index] = text
  
      this.setState({
          md: md,
      })
    }
    catch{}
  }

  render() {
    return (
      <PostList
        postList={this.state.postList}
        md={this.state.md}
      />);
  }
}

PostListContainer.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default PostListContainer;