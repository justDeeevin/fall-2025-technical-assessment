import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="results" element={<ResultsPage />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <div className="h-screen bg-white">
    <BrowserRouter>
      <App />
      <p className="text-[#aaaaaa] bottom-[0] text-center absolute w-full m-[32px] text-[16px]">
        All data is gathered from the{" "}
        <a href="https://planetterp.com/" className="text-[#B95F5F]">
          <u>PlanetTerp</u>
        </a>{" "}
        API.
      </p>
    </BrowserRouter>
  </div>,
);
