import { Routes, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import Home from "./components/Home";
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App;