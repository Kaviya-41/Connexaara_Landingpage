import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ConnexaaraLandingPage from './components/ConnexaaraLandingPage'
import Login from './pages/Login'
import EventsShowcase from './pages/EventsShowcase'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ConnexaaraLandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events-showcase" element={<EventsShowcase />} />
      </Routes>
      <ChatBot />
    </>
  )
}

export default App
