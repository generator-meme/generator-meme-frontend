import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import EditorMeme from './components/EditorMeme/EditorMeme'
import Footer from './components/Footer/Footer'
import MainLayout from './components/MainLayout/MainLayout'
import './App.css'

const App = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/generator-meme-frontend" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="edit" element={<EditorMeme />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
