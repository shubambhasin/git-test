import logo from "./logo.svg";
import "./App.css";

function App() {
  const feat1 = () => {
    console.log("Feature one executed");
  };
  return (
    <div className="App">
      Git test app, check console
      <button onClick={() => feat1()}>Feature 1</button>
    </div>
  );
}

export default App;
