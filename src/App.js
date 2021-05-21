import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import ArtList from './ArtList';
import About from './About';
import Sidebar from './Sidebar';
import ArtDetails from './ArtDetails'
import { HashRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <div className = "one">
        <Sidebar />
        </div>
        <div className = "two">
        <Route exact path="/" component={ArtList}/>
        <Route path="/details/:id" component={ArtDetails} />
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>

        </div>
        
      </div>
    </Router>
  );
}

export default App;
