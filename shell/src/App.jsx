import { Suspense } from 'react'
import React from 'react'
import './App.css'

const Header = React.lazy(() => import('headerApp/Header'))

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }}>
      <Suspense fallback={<div style={{ 
        padding: '1rem', 
        backgroundColor: '#2c3e50',
        color: 'white',
        textAlign: 'center',
        width: '100%'
      }}>Loading header...</div>}>
        <Header />
      </Suspense>
      <main style={{ 
        flex: 1,
        padding: '20px'
      }}>
        <h2>Contenu du Shell</h2>
        <p>Ceci est le contenu du shell</p>
      </main>
    </div>
  )
}

export default App