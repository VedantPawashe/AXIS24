import Hero from "./components/Hero"
import AI from './assets/AI.png'
import './App.css'
import HoverImage from "./components/HoverImage"
import Presenter from "./components/Presenter.jsx"
import Ytvid from "./components/Ytvid.jsx"
import Footer from "./components/Footer.jsx"
import MultipleCounters from "./components/Counter.jsx"

const App = () => {
  return (
    <div className="App">
      <Hero/>
      <div className="flex">
        <HoverImage className=""/>
        <div className="flex justify-center items-center w-full"><img className="w-96 h-96" src={AI}/></div>
      </div>
      <MultipleCounters/>
      <Ytvid/>
      <Presenter/>
      <Footer/>
    </div>
  )
}

export default App