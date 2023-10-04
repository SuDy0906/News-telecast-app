import './App.css';
import News from './Component/News';
import NavBar from './Component/NavBar';
import React, {useState} from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = ()=> {
  const pageSize = 10;
  const api_key = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0)  
    return (
      <div>
        <BrowserRouter>

          <NavBar />
          <LoadingBar
            color='red'
            progress={progress}
            height = {4}
            
          />
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} api_key = {api_key} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route path='/business' element={<News setProgress={setProgress} api_key = {api_key} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} api_key = {api_key} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
            <Route path='/general' element={<News setProgress={setProgress} api_key = {api_key} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} api_key = {api_key} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} api_key = {api_key} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} api_key = {api_key} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} api_key = {api_key} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>

          </Routes>

        </BrowserRouter>
      </div>

    )
  
}


export default App;