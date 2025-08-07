import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom'
import ChakraDemo from './pages/ChakraDemo.jsx'
import './App.css'


function Home() {
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <RouterLink to="/">Home</RouterLink> |{' '}
        <RouterLink to="/about">About</RouterLink> |{' '}
        <RouterLink to="/chakra">Chakra Demo</RouterLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chakra" element={<ChakraDemo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
