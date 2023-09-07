import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Details from "./pages/Details"

export const App = () => {
  return (
   <Routes>
      <Route index element={<Login />} />
      <Route path="details" element={<Details />} />
   </Routes>
  )
}
