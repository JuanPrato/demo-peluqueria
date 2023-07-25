import { Header } from "./components/home/Header"
import { Hero } from "./components/home/Hero"
import { About } from "./components/home/About"
import { Services } from "./components/home/Services"
import Staff from "./components/home/Staff"
import { Quotes } from "./components/home/Quotes"

function App() {
  return (
    <div data-theme="luxury">
      <Header />
      <div className="bg-black">
        <Hero />
      </div>
      <div className="max-w-[1920px] mx-auto">
        <main className="">
          <About />
          <Services />
          <Staff />
          <Quotes />
        </main>
      </div>
    </div>
  )
}

export default App
