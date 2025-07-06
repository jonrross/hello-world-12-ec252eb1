import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelloWorld from "@/components/HelloWorld";

function App() {
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <Router basename={baseUrl}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HelloWorld />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;