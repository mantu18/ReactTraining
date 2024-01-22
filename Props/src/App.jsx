import "./App.css";
import Container from "./Components/Container";
import Props from "./Components/Props";
import Props2 from "./Components/Props2";
import Props3 from "./Components/Props3";
import Props4 from "./Components/Props4";
import SnippetCard from "./Components/SnippetCard";
import propImage from './assets/Images/props.png'
function App() {
  const obj={
    heading: "Using props you can pass a object",
    body: "pass as: head = {obj.head} body = {obj.body} "
   
  };
  const obj2={
    heading: "You can also pass a object as {...obj2} ",
    body: "pass as {...obj2} and display as: {obj.property}"
  };
  const obj3={
    heading: "Grouping Recieved Props into a single object using Rest Property",
    body: "recieve as ({...props}) and display as: {props.property}"
  };
  const obj4={
    heading: "Recieve as {property1, property2}",
    body: "display as: {property1}, {property2}"
  };
  const Items = [
    {
      heading: "You can also pass a object as list item ",
      body: "pass as:  heading = {Items[0].head} body = {Items[0].body}"
    },
    {
      heading: "You can also pass a object as list item ",
      body: "pass as: {...Items[1]}"
     
    }
  ]
  return (
    <>
      <h1>Learn To Display Dynamic Content</h1>
      <div className="parent">
      <div className="imgContainer">
          <img id="propImage" src={propImage}/>
          <SnippetCard></SnippetCard>
      </div>
      <div className="xyz">
        <Container></Container>
        <Props
          heading="Using Props"
          body="You can pass props while adding a component"
        ></Props>
        <Props heading={obj.heading} body={obj.body}></Props>
        <Props {...obj2}></Props>
        <Props heading = {Items[0].heading} body = {Items[0].body}></Props>
        <Props {...Items[1]}></Props>
        <Props2 heading={obj3.heading} body={obj3.body}></Props2>
        <Props3 {...obj4}></Props3>
        <Props4 body="only passing body"></Props4>
      </div>
      
      </div>
    </>
  );
}

export default App;
