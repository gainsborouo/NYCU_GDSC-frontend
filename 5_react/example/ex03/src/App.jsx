import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InfoForm from "./components/InfoForm";
import Home from "./components/Home";
import DataFetcher from "./components/DataFetcher";
import { UserProvider } from "./context/UserContext";
import "./App.css";
import "./components/Nav.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/form">個人資訊表單</Link>
            </li>
            <li>
              <Link to="/data">數據抓取</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<InfoForm />} />
          <Route path="/data" element={<DataFetcher />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
