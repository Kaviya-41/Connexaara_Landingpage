import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ConnexaaraLandingPage from './components/ConnexaaraLandingPage'

// Lazy-loaded routes for code splitting
const Login = lazy(() => import('./pages/Login'))
const EventsShowcase = lazy(() => import('./pages/EventsShowcase'))
const ChatBot = lazy(() => import('./components/ChatBot'))

// Minimal brand-matching loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-brand-primary border-t-transparent animate-spin" />
        <span className="text-sm text-gray-500 tracking-wider uppercase font-medium">Loading…</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<ConnexaaraLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events-showcase" element={<EventsShowcase />} />
        </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </>
  )
}

export default App
