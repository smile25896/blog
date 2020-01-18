import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RightMenuStyled = styled.div`
  @media only screen and (max-width: 768px) {
    margin-left: 0px;
    width: auto;
  }

  width: 280px;
  min-width: 250px;
  padding: 10px;
`;

const Block = styled.div`
  padding: 0.5em;
  margin-bottom: 2em;
  font-size: 0.85rem;

  /* &:hover{
    box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8);
  } */
`;

const Title = styled.div`
  font-size: 1rem;
  padding: 0.7em 1em;
  border: 1px solid #8dc2c2;
  text-align: center;
  letter-spacing: 0.1em;
  margin-bottom: 0.5em;
`;

const SecondTitle = styled.div`
  font-size: 1.1rem;
  line-height: 2em;
`;

const Content = styled.div`
  line-height: 1.618em;
`;

const Ul = styled.ul`
  margin: 1em 0;

  li{
    line-height: 2em;
  }
`;

const Li = styled.li`
  cursor: pointer;
`;

const ToggleSpan = styled.span`
  cursor: pointer;
  padding: 0 3px;
`;

const ChildUl = styled.ul`
  display: ${props=>props.isOpen? 'block': 'none'};
  margin-left: 1em;
`;

const RightMenu = ({
  isOpens,
  postList,
  categories,
  toggleOpen,
}) => {
  let recentPosts = postList.slice().reverse().slice(0, 10);
  recentPosts = recentPosts.map(post=>(
    <li key={post.id}>
      <Link to={`/blog/post/${post.id}`}>
        {post.title}
      </Link>
    </li>
  ))
  let categoriesItems = categories.map(category=>{
    let childItems = []
    if(category.children.length>0){
      childItems = category.children.map(child=>(
      <li key={child.id}>
        <Link to={`/blog/category/${child.id}`}>{child.name}</Link>
      </li>))
    }
    return(
      <Li key={category.id} onClick={()=>{toggleOpen(category.id)}}>
        <ToggleSpan>
          {isOpens[category.id]===false && childItems.length>0? "+": "-"}
        </ToggleSpan>
          {category.name}
        {childItems.length>0 && (
          <ChildUl isOpen={isOpens[category.id]}>{childItems}</ChildUl>
        )}
      </Li>
    )
  })
  return (
    <RightMenuStyled>
      <Block>
        <Title>ABOUT ME</Title>
        <Content>
          <SecondTitle>Cathy Peng</SecondTitle>
          現職前端工程師<br/>
          喜歡設計、喜歡程式，希望自己能保持這樣的熱情一直學習下去！<br/>
          另外也在自學韓文，也會寫一些我學習韓文的筆記<br/>
          因為是自學的，內容僅供參考。
        </Content>
      </Block>
      <Block>
        <Title>最新文章</Title>
        <Ul>
          {recentPosts}
        </Ul>
      </Block>
      <Block>
        <Title>文章分類</Title>
        <Ul>
          {categoriesItems}
          {/* <li>設計</li>
          <li>
            韓文筆記
            <ChildUl>
              <li>文法</li>
              <li>
                聽歌學韓文
              </li>
            </ChildUl>
          </li> */}
        </Ul>
      </Block>
    </RightMenuStyled>
  );
};

RightMenu.propTypes = {
  isOpens: PropTypes.object.isRequired,
  postList: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default RightMenu;