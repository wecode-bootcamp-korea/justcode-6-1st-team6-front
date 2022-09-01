import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewPost from './pages/NewPost/NewPost';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Edit from './pages/Edit/Edit';
import MyList from './pages/MyList/MyList';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
