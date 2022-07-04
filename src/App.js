import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@components/pages/home";

import "./styles/scss/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
