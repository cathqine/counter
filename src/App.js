import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/main';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<MainPage /> />
          <Route path="/counter" element=<MainPage /> />
          <Route path="/counter/app" element=<Counter /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
