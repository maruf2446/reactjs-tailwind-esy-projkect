
import './App.css'
import Analytics from './Components/Analytics'
import Cards from './Components/Cards'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Footer from './Footer'
import NewsLetter from './NewsLetter'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Hero/>
      <Analytics></Analytics>
      <NewsLetter></NewsLetter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  )
}

export default App
