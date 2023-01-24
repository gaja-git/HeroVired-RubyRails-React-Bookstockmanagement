import logo from "./logo.svg"
import "./App.css"
import Bookstock from "./components/Bookstock"
import AddBook from "./components/AddBook"
import UpdateBook from "./components/UpdateBook"
import DeleteBook from "./components/DeleteBook"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Logout from "./components/Logout"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/" />
        <Route element={<Logout />} path="/logout" />
        <Route element={<Bookstock />} path="/bookstock" />

        <Route element={<AddBook />} path="/addbook" />
        <Route element={<UpdateBook />} path="/updatebook" />
        <Route element={<DeleteBook />} path="/deletebook" />
      </Routes>

      {/* <Bookstock />*/}
      <Footer />
    </div>
  )
}

export default App
