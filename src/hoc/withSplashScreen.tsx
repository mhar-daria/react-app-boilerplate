import { useState, useEffect } from 'react'
import SplashScreen from 'components/SplashScreen'

const withSplashScreen = (Component: any) =>
  function Wrap(props: any) {
    const [loading, toggleLoading] = useState(true)
    const delay = 5000

    useEffect(() => {
      const timeout = setTimeout(() => {
        toggleLoading(false)
      }, delay)
      return () => clearTimeout(timeout)
    }, [delay, toggleLoading])

    return (
      <>
        {loading && <SplashScreen />}
        {!loading && <Component />}
      </>
    )
  }

export default withSplashScreen
