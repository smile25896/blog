import styled from 'styled-components';


export const PostContentStyled = styled.div`
  /* max-width: 630px;
  margin: 0 auto; */
  margin-top: 0;
  border-radius: 3px;
  line-height: 1.8em;
  padding-bottom: 100px;
  font-family: 'Muli', '微軟正黑體', sans-serif;

  img{
    width: 100%;
  }

  p{
    margin-bottom: 2em;
  }

  blockquote{
    margin-bottom: 2em;
    border-left: 5px #a9d6d6 solid;
    padding-left: 20px;
  }
  .highLight{
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
    font-weight: 500;
    color: #61a3a3;
  }

  h3{
    font-size: 1em;
    font-weight: 600;
    margin-bottom: 0.2em;
    color: #333;
  }

  pre{
    margin-bottom: 2em;
  }

  code{
    background: #f3f3f3;
    font-family: 'Inconsolata', monospace;
    display: inline-block;
    padding: 1.5em;
    width: 100%;
    border-radius: 8px;
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
`;

export const PostTextStyled = styled(PostContentStyled)`
  width: 100%;
  max-width: 100%;
  padding: 0;
  h2{
    margin: 0.3em 0;
  }
  p{
    margin-bottom: 0.5em;
  }
  blockquote{
    margin-bottom: 0.5em;
  }
`;