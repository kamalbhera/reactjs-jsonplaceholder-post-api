import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import PostwithComments from './components/PostwithComments';
import Posts from './components/Posts';

function App() {

  const [postDetail,setPostDetail]= useState({});

  return (
    <div className="bg-gray-400 bg-opacity-25">
    <Route exact path="/">
      <Navbar/>
    </Route>
    <Route exact path ="/postwithcomments">
      <PostwithComments postDetail={postDetail} />
    </Route>
    <Route exact path ="/posts">
      <Posts setPostDetail={setPostDetail}/>
    </Route>
    </div>
  );
}

export default App;
