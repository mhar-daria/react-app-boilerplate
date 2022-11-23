import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function BasicLayout(props: any) {
  return (
    <>
      <Header />
      <main className="my-5">
        <Outlet />
      </main>
    </>
  )
}
