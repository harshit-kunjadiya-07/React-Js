import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import lan2 from './assets/lan2.png'

function App() {

  return (
    <div>
      <Header />
      <main>
      <img src={lan2} alt="Lan" />
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App