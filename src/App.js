import React, { Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Intro from "../src/components/Intro/Intro"
import Navbar from "../src/components/Navbar/Navbar"
import Blogs from "../src/components/blogs/Blogs"
import Getintouch from "../src/components/get-in-touch/Getintouch"
import Projects from "../src/components/projects/Projects"
import Publication from "../src/components/publication/Publication"
import './App.css';


function App() {
  return (
      <Router>
        <Fragment>

        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/get-in-touch" element={<Getintouch />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        </Fragment>
      </Router>
  );
}

export default App;             
