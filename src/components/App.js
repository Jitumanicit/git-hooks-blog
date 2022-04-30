import { Switch, Route } from 'react-router-dom';
import { Navbar, Home, CreatePost, PostDetail } from './';
import React from 'react';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:postId" component={PostDetail} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
