import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Process from "./components/Process"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <div className="flex flex-col gap-10 my-10">
      <div className="container">
        <Navbar/>
      </div>
      <div>
        <div className="container">
          <Hero />
        </div>
        <Banner/>
      </div>
      <div className="container">
        <Process/>
      </div>
      <div className="container">
        <Projects/>
      </div>
      <div className="container">
        <Testimonials/>
      </div>
      <div className="container">
        <Contact/>
      </div>
      <div className="container">
        <Footer/>
      </div>
    </div>
  )
}

export default App
