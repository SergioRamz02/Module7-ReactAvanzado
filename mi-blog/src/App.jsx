import './App.css'
import Header from './Components/Header'
import Login from './Components/Login'
import ContenidoPrivado from './Components/ContenidoPrivado'
import { UserProvider } from './Context/UserContext'

function App() {

  return (
    <UserProvider>
      <Header />
      <Login />
      <ContenidoPrivado />
    </ UserProvider>
  )
}

export default App
