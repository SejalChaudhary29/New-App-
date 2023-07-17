
import Navbar from "./Components/Navbar";
import './App.css'
import React, { useState } from 'react'
import NewsComp from './Components/NewsComp';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router, Routes,Route,} from "react-router-dom";
const App =()=>{


  const pageSize= 6 ;

 const [progress, setProgress] = useState(0)
  
    return (

      <div>
        <Router>
          <Navbar />
   <LoadingBar
        color='#f11946'
        height = {3}
        progress={progress}
      />
          <Routes>
            <Route path='/' element={<NewsComp setProgress = {setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<NewsComp setProgress = {setProgress} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<NewsComp setProgress = {setProgress} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<NewsComp setProgress = {setProgress} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
            <Route path='/general' element={<NewsComp setProgress = {setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route path='/science' element={<NewsComp setProgress = {setProgress} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<NewsComp setProgress = {setProgress} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<NewsComp setProgress = {setProgress} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
          </Routes>
        </Router>

      </div>
  
    )
  
}
export default App;

