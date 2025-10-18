
import { Outlet } from "react-router"
import './App.css'
import Navbar from "./conponents/Navbar"
import { BookProvider } from "./context/BookContext"
import Footer from "./conponents/Footer"

function App() {
  return (
    <>
    <BookProvider>
      <Navbar/>
      <main className="min-h-[calc(100vh-100px)] mt-16">
        <Outlet/>
      </main>
      <Footer/>
    </BookProvider>
    </>
  )
}

export default App
