import Header from "./components/header/Header.comp";
import Nav from "./components/nav/Nav.comp";
import About from "./components/about/About.comp";
import Experiences from "./components/experiences/Experiences.comp";
import Services from "./components/services/Services.comp";
import Portfolio from "./components/portfolio/Portfolio.comp";
import Testimonials from "./components/testimonials/Testimonials.comp";
import Footer from "./components/footer/Footer.comp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
