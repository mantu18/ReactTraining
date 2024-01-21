import Card from '../components/Card'
import Card2 from '../components/Card2';
import './App.css'


function App() {
  function handleclick(){
    alert("Click handled");
  }
  function handleSelect(){
    alert("You just clicked on card");
  }
  function handleSelect2(data){
    alert("you just selected "+data)
  }
  return (
    <>
      <h1>Let Us learn Event handling</h1>
      <button onClick={handleclick}>Click Me!</button>
      {/* You can listen for evrnts on Custom Components By passing event hndling function as a prompt */}
      <Card onSelect={handleSelect}></Card>
      <Card2 onSelect2={()=>handleSelect2("card2")} ></Card2>
    </>
  )
}

export default App
