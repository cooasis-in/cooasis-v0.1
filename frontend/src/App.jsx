import Slider from "react-slick";
import "./App.css";
import EcosystemSignup from "./pages/EcosystemSignup/EcosystemSignup";
import { Routes, Route } from "react-router-dom";
import ReferEarn from "./components/mobileResponsive/referEarn/ReferEarn";
import VerifiedResp from "./components/mobileResponsive/verified/VerifiedResp";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<EcosystemSignup />} />
        <Route path="/verify" element={<ReferEarn />} />
        <Route path="/verified" element={<VerifiedResp />} />
        <Route path="/refer" element={<ReferEarn />} />
      </Routes>
    </div>
  );
}

export default App;
