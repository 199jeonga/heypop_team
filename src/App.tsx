import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'routes/Home'
import Register from 'routes/Register'
import Login from 'routes/Login'
import NaverCallback from 'routes/NaverCallback'
import Design from 'routes/Design'
import Art from 'routes/Art'
import Living from 'routes/Living'
import Style from 'routes/Style'
import Food from 'routes/Food'
import GlobalStyles from 'GlobalStyles'

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
                <Route
                    path={`${process.env.PUBLIC_URL}/heypop_team`}
                    element={<Home />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/register`}
                    element={<Register />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/login`}
                    element={<Login />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/navercallback`}
                    element={<NaverCallback />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/design`}
                    element={<Design />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/art`}
                    element={<Art />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/living`}
                    element={<Living />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/style`}
                    element={<Style />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/food`}
                    element={<Food />}
                />
            </Routes>
        </Router>
    )
}

export default App
