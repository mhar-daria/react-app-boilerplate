import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'config/routes'
import useRoutes from 'hooks/useRoutes'
import withSplashScreen from 'hoc/withSplashScreen'

function RouteWrapper() {
  const Routes = useRoutes

  return (
    <Router>
      <Routes routes={routes} />
    </Router>
  )
}

export default withSplashScreen(RouteWrapper)
