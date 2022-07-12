import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'routes/Home'
import Register from 'routes/Register'
import Login from 'routes/Login'
import NaverCallback from 'routes/NaverCallback'
import Design from 'routes/Design'
import Art from 'routes/Art'
import GlobalStyles from 'GlobalStyles'

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/heypop_team" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/navercallback" element={<NaverCallback />} />
                <Route path="/design" element={<Design />} />
                <Route path="/art" element={<Art />} />
            </Routes>
        </Router>
    )
}

export default App
