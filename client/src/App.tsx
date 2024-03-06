import { Routes, Route } from "react-router"

import Countries from "./pages/Countries"
import Country from "./pages/Country"

function App() {

  return (
    <>
      <div>
      <h1>Where in the world?</h1>
      <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </div>
    </>
  )
}

export default App
