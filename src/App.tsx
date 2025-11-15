
import type React from 'react'
import './App.css'
import UserCardComponent from './components/UserCardComponent'

interface ParentProps {
  children: React.ReactNode
}

function Parent({ children }: ParentProps) {
  return (
    <div>
      <h2>parent component</h2>
      {children}
    </div>
  )
}

function App() {

  return (
    <>
      <Parent>
        <h1>Thsi is heading</h1>
        <p>This is paragraph</p>
      </Parent>
      {/* <UserCardComponent/> */}
    </>
  )
}

export default App
