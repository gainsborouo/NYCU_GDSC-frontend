// src/components/Home.jsx
import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      <h1>歡迎{user ? ' ' + user.name + ' ' : ''}來到 React 教學</h1>
      <p>這是一個簡單的 React 應用範例。</p>
    </div>
  );
}

export default Home;
