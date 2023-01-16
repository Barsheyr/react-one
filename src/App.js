import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import About from "./components/About";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Hero />
        <About />
        <Services />
        <Tours />
        <Footer />
      </>
    </div>
  );
}

export default App;
