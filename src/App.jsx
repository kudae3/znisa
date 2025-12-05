import Banner from "./components/Banner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Process from "./components/Process"
import Projects from "./components/Projects"

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
    </div>
  )
}

export default App
