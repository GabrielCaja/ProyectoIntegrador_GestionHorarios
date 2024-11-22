'use client'

import { useState } from 'react'
import { Input } from './components/Input'
import { Button } from './components/Button'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log('Intento de', { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 to-black p-8">
      <div className="w-full max-w-md ">
        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-lg p-8 space-y-6">

          <Image 
          src="/logoU-TAD.jpg" 
          alt="Logo Utad"
          width={150}
          height={150}
          className="object-contain relative mx-auto"
        />
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                className={`pl-10 border-blue-500 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out
                  ${focusedInput === 'email' ? 'transform scale-105' : ''}
                  ${email ? 'animate-shake' : ''}`}
                placeholder="tu@gmail.com"
                required
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div
              className={`h-0.5 bg-blue-500 transition-all duration-300 ease-in-out
                ${focusedInput === 'email' ? 'w-full' : 'w-0'}`}
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
                className={`pl-10 border-blue-500 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out
                  ${focusedInput === 'password' ? 'transform scale-105' : ''}
                  ${password ? 'animate-shake' : ''}`}
                placeholder="••••••••"
                required
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div
              className={`h-0.5 bg-blue-500 transition-all duration-300 ease-in-out
                ${focusedInput === 'password' ? 'w-full' : 'w-0'}`}
            />
          </div>
          <div className="transform transition-all duration-300 ease-in-out hover:scale-105">
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-00 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Iniciar Sesión
              <svg
                className="inline-block ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </form>
        
      </div>
    </div>
  )
}

