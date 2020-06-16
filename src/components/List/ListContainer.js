import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import postList from 'post/list.json'

class ListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      md: [],
      postList: [],
      urlKey: this.props.location.key
    }
    this.postList = postList.slice()
    this.getList = this.getList.bind(this)
    this.getPostMarkdown = this.getPostMarkdown.bind(this)
  }

  componentDidMount(){
    this.getList()
    window.scrollTo(0,0)
  }

  componentDidUpdate(){
    let urlKey = this.props.location.key
    if(urlKey !== this.state.urlKey){
      window.scrollTo(0,0)
      this.setState({
        urlKey,
      })
      this.getList()
    }
  }

  getList(){
    let postList;
    let categoryId = this.props.match.params.categoryId
    if(categoryId){
      postList = this.postList.filter(post=>post.category === categoryId)
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
      <List
        postList={this.state.postList}
        md={this.state.md}
      />);
  }
}

ListContainer.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default ListContainer;