import Nav from "./components/Nav"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skillset from "./components/Skillset"
import Footer from "./components/Footer"

import "./style.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Profile />
      <Projects />
      <Skillset />
      <Footer />
    </div>
  );
}

export default App;
