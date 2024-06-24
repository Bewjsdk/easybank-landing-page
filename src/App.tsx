import Navbar from "./components/Navbar/Navbar"
import About from "./sections/About"
import Blog from "./sections/Blog"
import Footer from "./sections/Footer"
import Home from "./sections/Home"

function App() {

  return (
    <>
      {/* Top NavBar */}
      <Navbar />

      {/* Main */}
      <main>
        {/* Home Section */}
        <Home />

        {/* About Section */}
        <About />

        {/* Blog Section */}
        <Blog />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
