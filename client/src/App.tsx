import { Routes, Route } from "react-router"

import Countries from "./pages/Countries"
import Country from "./pages/Country"
import Header from "./components/Header"

function App() {

  return (
    <>
      <div>
      <Header />
      <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </div>
    </>
  )
}

export default App
