import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'routes/Home'
import GlobalStyles from 'GlobalStyles'

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App
