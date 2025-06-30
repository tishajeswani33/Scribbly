import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { Header } from './components/Layout/Header'
import { BlogList } from './components/Blog/BlogList'
import { BlogPost } from './components/Blog/BlogPost'
import { CreatePost } from './components/Blog/CreatePost'
import { AuthForm } from './components/Auth/AuthForm'
import { UserProfile } from './components/Profile/UserProfile'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/auth" element={<AuthForm />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App