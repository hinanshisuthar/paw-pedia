import "./App.css";
import { Aside } from "./components/Aside/Aside";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
      </div>
    </div>
  );
}

export default App;
