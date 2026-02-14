import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleSelect from "./components/RoleSelect";
import StudentLogin from "./components/StudentLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/student-login" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;