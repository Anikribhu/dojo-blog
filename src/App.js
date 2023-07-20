import Navbar from './components/navbar/navbar';
import Home from './components/Home/home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  
  );
}

export default App;
