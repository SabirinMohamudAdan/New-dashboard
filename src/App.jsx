import { Route, Routes } from "react-router-dom"
import Hero from "./components/hero"
import SideNav from "./components/sideNave"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import Teachers from "./pages/Teachers"

function App() {
  return <div>
    <SideNav>
      {/* <Hero /> */}
    </SideNav>

    <Routes>
      <Route  path="/"  element={<Dashboard/>}/>
      <Route  path="/students"  element={<Students/>}/>
      <Route  path="/teachers"  element={<Teachers/>}/>
    </Routes>
  </div>
}

export default App