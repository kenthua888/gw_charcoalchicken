import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />      {/* Default/home page */}
        <Route path="/menu" element={<Menu />} />  {/* /menu URL */}
        <Route path="/about" element={<About />} /> {/* /about URL */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <CTA />
      <Footer />
    </div>
  )
}

export default App
