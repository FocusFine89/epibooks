
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AllTheBooks from "./components/AllTheBooks";
import TopBar from './components/TopBar';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Welcome/>
      <AllTheBooks/>
    </div>
  );
}

export default App;
