

import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';





function App() {
  const URL: string = "http://localhost:5173/";


  return (
    <div className='App'>
      <Header />

      <main className='text-center'>
      <Routes>
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </main>


      
    </div>
  )
}

export default App
