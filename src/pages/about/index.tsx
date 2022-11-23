import React from 'react'

export default function About(props: any) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">About</h1>

      <div className="mt-5">
        <p>This is a react app boilerplate.</p>
        <h2 className="text-2md font-bold mt-2">Redux Sagas</h2>
        <p>This boilerplate use redux saga.</p>
      </div>
    </div>
  )
}
