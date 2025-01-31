import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Posts from './components/posts';
import PostPage from './components/PostPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      < NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/post/:id' element={<PostPage />}/>
      </Routes>
     
    </div> 
  )
}

export default App;