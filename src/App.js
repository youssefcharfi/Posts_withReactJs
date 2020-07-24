import React from 'react';
import Posts from './posts/posts';
import Navbar from './navbar';
import AddPost from './posts/AddPost'
import { Provider } from './posts/context'
import './App.css'
function App() {
  return (
    <Provider>
      <div className="app">
        <Navbar />
        <AddPost />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
