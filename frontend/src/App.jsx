import Slider from "react-slick";
import "./App.css";
import EcosystemSignup from "./pages/EcosystemSignup/EcosystemSignup";
import { Routes, Route } from "react-router-dom";
import ReferEarn from "./components/mobileResponsive/referEarn/ReferEarn";
import VerifiedResp from "./components/mobileResponsive/verified/VerifiedResp";
import SliderMob from "./components/mobileResponsive/sliderResp/SliderMob";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<EcosystemSignup />} />
        <Route path="/verify" element={<ReferEarn />} />
        <Route path="/verified" element={<VerifiedResp />} />
        <Route path="/refer" element={<ReferEarn />} />
        <Route path="/slider" element={<SliderMob />} />
      </Routes>
    </div>
  );
}

export default App;
