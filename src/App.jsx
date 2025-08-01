import logoWS from '/logo.jpg'
import under from '/under_construction.png'
import './App.css'

function App() {

  return (
    <>
      <img src={logoWS} className="logo" alt="Logo Gestión Wall Street" />
      <h1>Gestión Wall Street</h1>
      <img src={under} className="under" alt="under construction" />
      <p>Versión <strong>0.0.0.7</strong></p>
    </>
  )
}

export default App
