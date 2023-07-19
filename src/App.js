import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";

function App() {
  return (
    <div className="App">
      <Person name="Abhishek" age="23" />

      <Button text="Click Me" onClick={ () => console.log("button clicked") } />

      <Header title="I am Header" />

      <List items={["Home", "About Us", "Contact Us"]} />
    </div>
  );
}

export default App;
