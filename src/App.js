import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom"


function App() {

  return (
<BrowserRouter>
<nav class="navbar bg-body-tertiary">
<div class="container-fluid">
<Link to="/">Home</Link>{' '}
<Link to="/about">About</Link>{' '}
<Link to="/contact">Contact</Link>{' '}
</div>
</nav>
<Routes>
<Route exact path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>
    )

}
export default App;
