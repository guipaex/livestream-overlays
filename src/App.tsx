import { Route, Routes } from "react-router-dom";
import CamFrame from "./components/CamFrame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/cam" element={<CamFrame />} />
      </Routes>
    </>
  );
}

export default App;
