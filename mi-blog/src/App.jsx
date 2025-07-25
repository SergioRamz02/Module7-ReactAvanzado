import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import PostList from './pages/PostList'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
