import logo from "./logo.svg";
import "./App.css";

function App() {
  const feat1 = () => {
    console.log("Feature one executed");
  };
  const feat2 = () => {
    console.log("Feature two executed");
  };
  return (
    <div className="App">
      Git test app, check console
      <button onClick={() => feat1()}>Feature 1</button>
      <button onClick={() => feat2()}>Feature 2</button>
    </div>
  );
}

export default App;
