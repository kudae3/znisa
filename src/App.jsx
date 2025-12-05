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
    <div className="flex flex-col gap-10 my-5 md:my-10 mx-2 md:mx-3 lg:mx-0">
      <div className="container">
        <Navbar/>
      </div>
      <div id="home">
        <div className="container">
          <Hero />
        </div>
        <Banner/>
      </div>
      <div id="about" className="container">
        <Process/>
      </div>
      <div id="projects" className="container">
        <Projects/>
      </div>
      <div className="container">
        <Testimonials/>
      </div>
      <div id="contact" className="container">
        <Contact/>
      </div>
      <div className="container">
        <Footer/>
      </div>
    </div>
  )
}

export default App
