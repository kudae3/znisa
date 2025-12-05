import Banner from "./components/Banner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Process from "./components/Process"

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
    </div>
  )
}

export default App
