import styled from 'styled-components';


export const PostContentStyled = styled.div`
  /* max-width: 630px;
  margin: 0 auto; */
  margin-top: 0;
  border-radius: 3px;
  line-height: 1.618em;
  padding-bottom: 100px;
  font-family: 'Muli', '微軟正黑體', sans-serif;

  strong{
    font-weight: bold;
    background-color: #cae8e8;
  }

  img{
    max-width: 100%;
  }

  p, ol{
    margin-bottom: 1.2em;
  }

  ol{
    list-style-type: decimal;
  }

  ul{
    list-style-type: circle;
  }

  ol, ul{
    padding-left: 1.2em;
  }

  blockquote{
    margin-bottom: 2em;
    border-left: 5px #a9d6d6 solid;
    padding-left: 20px;
  }
  .tip{
    position: relative;
    border: 3px #c7d9d9 solid;
    border-radius: 3px;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 2em;

    &:before{
      box-sizing: border-box;
      content: attr(name);
      display: block;
      position: absolute;
      /* width: 60px; */
      height: 33px;
      top: -33px;
      left: -3px;
      background: #c7d9d9;
      /* color:#61a3a3; */
      /* font-weight: 600; */
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      padding: 2px 10px;
    }
  }
  .highlight{
    color: #ef5d40;
  }

  h1{
    font-size: 1.7em;
    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  h2{
    font-size: 1.3em;
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 600;
    color: #61a3a3;
    /* color: #367575; */
  }

  h3{
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.2em;
    color: #333;
  }

  h4{
    font-weight: 600;
  }

  pre{
    margin-bottom: 2em;
  }

  code{
    background: #f3f3f3;
    font-family: 'Inconsolata', monospace, '微軟正黑體', 'sans-serif';
    display: inline-block;
    padding: 1.5em;
    width: 100%;
    border-radius: 8px;
  }

  a:hover{
    opacity: 0.6;
  }

  .circle{
    padding-left: 1.5em;
    li:before{
      content: "";
      display: block;
      width: 0.4em;
      height: 0.4em;
      position: absolute;
      transform: translateY(0.7em) translateX(-1em);
      background-color: #61a3a3;
      border-radius: 50%;
    }
  }

  .small{
    margin-bottom: 0.8em;
  }

  .small2{
    margin-bottom: 0;
  }

  .bold{
    font-weight: 700;
  }

  table{
    border: 1px solid #aaa;
    td{
      border: 1px solid #aaa;
      padding: 10px;
    }
  }
`;

export const PostTextStyled = styled(PostContentStyled)`
  width: 100%;
  max-width: 100%;
  padding: 0;

  & h2:first-child{
    margin-top: 0.3em;
  }

  h2{
    margin-bottom: 0.3em;
    margin-top: 0.8em;
  }
  h3{
    font-size: 1em;
  }
  p{
    margin-bottom: 0.5em;
  }
  blockquote{
    margin-bottom: 0.5em;
  }
`;