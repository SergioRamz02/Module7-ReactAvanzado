import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import NuevoPost from './Components/NuevoPost'
import ArticulosBlog from './Components/ArticulosBlog'

function App() {

  return (
    <>
      <h1>Uso de useForm()</h1>
      <Form />
      <h1>Formulario Nuevo Post</h1>
      <NuevoPost />

      <h1>APIs con React y useEffect()</h1>
      <ArticulosBlog />


    </>
  )
}

export default App
