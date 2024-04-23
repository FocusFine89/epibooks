
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AllTheBooks from "./components/AllTheBooks";
import Footer from "./components/FooterBar";
import TopBar from './components/TopBar';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Welcome/>
      <AllTheBooks/>
      <Footer/>
    </div>
  );
}

export default App;
