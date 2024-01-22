import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent/SecondComponent'

function App() {
  

  return (
    <>
      <h1 id="heading">Creating First React Component</h1>
      <div className="container">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      </div>
    </>
  )
}

export default App
