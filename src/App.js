import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import NewForm from "./pages/NewForm/NewForm";
import Website from "./pages/Website/Website.jsx";
import Home from "./pages/Home/Home.jsx";
import Submissions from "./components/Submissions/Submissions.jsx";
import About from "./components/About/About.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website/>}>
          <Route index element={<Home/>}/>
          <Route path="check" element={<div>check</div>} />
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<div>contact</div>}/>
        </Route>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/new/:id/:name" element={<NewForm/>}/>
        <Route path="/submissions/:formId" element={<Submissions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
