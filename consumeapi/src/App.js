import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentList from "./studentList";
import StudentView from "./studentView";
import StudentEdit from "./studentEdit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentList/>}/>
        <Route path="/:id" element={<StudentView/>}/>
        <Route path="/edit/:id" element={<StudentEdit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
