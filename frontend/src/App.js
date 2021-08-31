import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Posts from "./screens/Posts";

function App() {
   return (
      <Router>
         <Header />
         <main style={{ height: "90vh" }}>
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/" component={Home} />
         </main>
         <Footer />
      </Router>
   );
}

export default App;
