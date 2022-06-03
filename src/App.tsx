import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'routes/Home'
import Register from 'routes/Register'
import Login from 'routes/Login'
import GlobalStyles from 'GlobalStyles'

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Routes>
                {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/heypop_team" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App