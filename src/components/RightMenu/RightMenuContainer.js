import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import RightMenu from './RightMenu';
import postList from 'post/list.json'
import category from 'category/category.json'

class RightMenuContainer extends Component {
  constructor(props){
    super(props);
    this.postList = postList.slice();
    this.categories = category.slice()
    let isOpens = {}
    this.categories.forEach(category=>{
      isOpens[category.id] = false
    })
    this.state = {
      isOpens,
    }
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen(id){
    let isOpens = JSON.parse(JSON.stringify(this.state.isOpens));
    isOpens[id] = !isOpens[id]
    this.setState({
      isOpens,
    })
  }

  render() {
    return (
      <RightMenu
        isOpens={this.state.isOpens}
        postList={this.postList}
        categories={this.categories}
        toggleOpen={this.toggleOpen}
      />
    );
  }
}

RightMenuContainer.propTypes = {
};

export default RightMenuContainer;