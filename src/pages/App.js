import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js'
import Services from "./Services.js"
import News from './News.js'
import Blog from './Blog.js'
import Careers from './Careers.js'
import Contact from './Contact.js'
import NoPage from './NoPage.js'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}


