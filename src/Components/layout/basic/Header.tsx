import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props: any) {
  return (
    <header className="w-full bg-sky-700 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex justify-start">
          <h1 className="text-3xl text-white">
            <Link to="/">React App Boilerplate</Link>
          </h1>
        </div>

        <nav className="flex justify-end">
          <Link to="/" className="px-2 text-white hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="px-2 text-white hover:text-orange-500">
            About
          </Link>
          <Link to="/users" className="px-2 text-white hover:text-orange-500">
            Users
          </Link>
          <Link to="/modals" className="px-2 text-white hover:text-orange-500">
            Modals
          </Link>
          <Link to="/users" className="px-2 text-white hover:text-orange-500">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
