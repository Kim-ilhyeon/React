import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import TodoList from './components/TodoList'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{margin: '0 0'}}>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/todoList' element={<TodoList />} />
            </Routes>
          </BrowserRouter>
          <ToastContainer />
      </div>
    </div>
  )
}

export default App
