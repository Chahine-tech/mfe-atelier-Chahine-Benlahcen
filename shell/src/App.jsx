import { Suspense } from 'react'
import React from 'react'
import './App.css'

const Header = React.lazy(() => import('headerApp/Header'))

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <div style={{ padding: '20px' }}>
        <h2>Contenu du Shell</h2>
      </div>
    </>
  )
}

export default App