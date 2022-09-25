import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Error from './Pages/Error'

/**
 * La fonction App renvoie un composant BrowserRouter qui contient un div avec une classe de main, qui
 * contient un div avec une classe de contenu, qui contient un composant Header, un composant Routes et
 * un composant Footer
 * @returns L'instruction return renvoie le code JSX qui est rendu au DOM.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<Error />} />
            <Route path="/not-found" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
