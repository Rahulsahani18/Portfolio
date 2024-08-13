
import './App.css';
import './components/NavBar'
import Footer from './components/footer'
import NavBar from './components/NavBar';
import Index from './components/home';
function App() {
  return (
    <div className="App">
   <NavBar />
   <Index/>
   <Footer/>
    </div>
  );
}

export default App;
