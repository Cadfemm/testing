import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Signin"; // Assuming useLocation is used in the Login component
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import SpinalInjury from "./pages/SpinalInjury";
import stroke from "./pages/stroke";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Route
          render={({ location }) => (location.pathname !== "/" && location.pathname !== "/Signup") && <Navbar />}
        />

        {/* Switch and Routes */}
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Login} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Spinalinjury" exact component={SpinalInjury} />
          
          <Route path="/stroke" exact component={stroke} />
        </Switch>

        {/* Footer */}
        <Route
          render={({ location }) => (location.pathname !== "/" && location.pathname !== "/Signup") && <Footer />}
        />
      </Router>
    </div>
  );
}

export default App;
