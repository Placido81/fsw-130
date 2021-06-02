import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Contactus from "./components/Contactus"
import About from "./components/about/About"
import Gallery from "./components/gallery/Gallery"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
     
      <Switch>
        <Route
          exact path="/"
          render={() => <Home />}
        />
        <Route
          exact path="/contactus"
          render={() => <Contactus />}
        />
        <Route
          exact path="/about"
          render={() => <About />}
        />
        <Route
          exact path="/gallery"
          render={() => <Gallery />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;