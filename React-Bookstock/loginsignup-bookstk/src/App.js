import logo from "./logo.svg"
import "./App.css"
import Bookstock from "./components/Bookstock"
import AddBook from "./components/AddBook"
import UpdateBook from "./components/UpdateBook" 
import DeleteBook from "./components/DeleteBook"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route element={<Signup />} path="/signup" />
      <Route element={<Login />} path="/" /> */}
        {/* <Route element={<Bookstock />} path="/bookstock" /> */}
        {/* <Route element={<Bookstock />} path="/bookstock" /> 
        <Route element={<AddBook />} path="/addbook" /> 
        <Route element={<UpdateBook />} path="/updatebook" /> 
        <Route element={<DeleteBook />} path="/deletebook" /> */}
      </Routes>
      
      <Bookstock />
    </div>
  )
}

export default App
