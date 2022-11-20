import { useState } from 'react'
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import DefaultPage from './pages/DefaultPage';
import ScrollToTop from './components/ScrollToTop';

function AppRoutes() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />

      <Routes>
        <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
        </Route>
        
        <Route path='posts/:id/*' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
