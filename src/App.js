import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/project/:id' element={<ProjectDisplay/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
