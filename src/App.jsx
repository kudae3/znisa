import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="container flex flex-col gap-10">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
