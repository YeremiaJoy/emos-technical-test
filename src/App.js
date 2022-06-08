import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
