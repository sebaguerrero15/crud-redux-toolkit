import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TasksList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
