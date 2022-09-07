import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../views/home'
import Quiz from '../views/quiz'
import Result from '../views/result'

const MainRouter = () => (
    <Router>
        <Routes>
            <Route path='/quiz' element={<Quiz/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
)

export default MainRouter