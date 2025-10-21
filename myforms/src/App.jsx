import './components/SignupForms'
import './App.css'
import React from 'react'
import SignupForms from './components/SignupForms'

function App() {

  return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Signup</h1>
        <SignupForms />
      </div>
    </div>
  )
}

export default App
