import {Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard/Dashboard"


const Allroutes = () => {

  return (
    <div>
      <Routes>
        <Route path="" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default Allroutes