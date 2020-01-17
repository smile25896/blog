import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Home from './Home';
import postList from 'post/list.json'

class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      md: []
    }
    this.postList = postList.slice()
    this.getPostMarkdown = this.getPostMarkdown.bind(this)
  }

  componentDidMount(){
    this.postList.forEach((post,index)=>{
      this.getPostMarkdown(post.id, index)
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
      <Home
        postList={this.postList}
        md={this.state.md}
      />);
  }
}

HomeContainer.propTypes = {
};

export default HomeContainer;