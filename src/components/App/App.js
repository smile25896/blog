import React from 'react';
import { Route } from 'react-router-dom';
import { Blog } from 'components'

function App() {
  return (
    <React.Fragment>
      <Route path="/blog" component={Blog}/>
      <Route path="/img/:filename" component={Image}/>
    </React.Fragment>
  );
}

export default App;
