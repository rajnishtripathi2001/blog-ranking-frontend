import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blogpage from "./Components/BlogPage/Blogpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Blog" element={<Blogpage/>}></Route>
    </Routes>
  );
}

export default App;
