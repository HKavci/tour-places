import Card from "./components/cards/Card"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import {data} from './helper/data.js'
import "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Card data = {data} />
    </div>
  )
}
export default App
