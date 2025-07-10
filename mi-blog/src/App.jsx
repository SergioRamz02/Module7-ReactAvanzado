import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import NuevoPost from './Components/NuevoPost'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Uso de useForm()</h1>
      <Form />
      <h1>Formulario Nuevo Post</h1>
      <NuevoPost />
    </>
  )
}

export default App
