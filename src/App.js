import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import EditorMeme from './components/EditorMeme/EditorMeme'
import './App.css'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/edit" element={<EditorMeme />} />
      </Routes> 
      <Footer />
    </div>
  )
}

export default App
