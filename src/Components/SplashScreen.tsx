import React from 'react'

export default function SplashScreen() {
  return (
    <div className="relative m-auto top-0 left-0 right-0 bottom-0 h-80 w-80 text-center mt-10">
      <span className="h-40 w-40">
        <span className="animate-ping absolute inline-flex h-4/5 w-4/5 rounded-full bg-sky-400 opacity-74"></span>
        <span className="relative inline-flex rounded-full h-4/5 w-4/5 bg-sky-500"></span>
      </span>

      <p className="absolute bottom-0 text-center">
        Please wait while we load your app...
      </p>
    </div>
  )
}
