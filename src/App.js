import logo from "./logo.svg";
import "./App.css";

function App() {
  const feat1 = () => {
    console.log("Feature one executed");
  };
  return (
    <div className="App">
      Git test app, check console

      <h1>Feature_1_sub_1</h1>
      <button onClick={() => feat1()}>Feature 1</button>
      <button>Feature_1_sub_1</button>
    </div>
  );
}

export default App;
