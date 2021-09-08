import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Posts from "./screens/Posts";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register";

function App() {
   return (
      <Router>
         <Header />
         <main>
            <Route path="/register" exact component={Register} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/" component={Home} />
         </main>
         <Footer />
      </Router>
   );
}

export default App;
