import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'
import React,{useState} from 'react'
import Spinner from './components/Spinner';
import News from'./components/News'
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
const[progress,setProgress]=useState(0);


return (<>
  <Router>
  <Navbar/>
  <LoadingBar
  height={3}
  color='#f11946'
  progress={progress}
  ></LoadingBar>
    <Routes>
      <Route exact path="" element={<News key="business" category="business" setProgress={setProgress}></News>}></Route>
      <Route exact path="/entertainment" element={<News key="entertainment" category="Entertainment "setProgress={setProgress} ></News>}></Route>
      <Route exact path="/technology" element={<News category="Technology" key="technology" setProgress={setProgress}></News>}></Route>
      <Route exact path="/health" element={<News category="Health" key="health" setProgress={setProgress}></News>}></Route>
    </Routes>
    </Router>
   
  </>
  
  );
};

 
export default App;
