import Slider from "react-slick";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReferEarn from "./components/mobileResponsive/referEarn/ReferEarn";
import VerifiedResp from "./components/mobileResponsive/verified/VerifiedResp";
import SliderMob from "./components/mobileResponsive/sliderResp/SliderMob";
import PenTool from "./components/penTool/PenTool";
import PenToolUi from "./components/penTool/PenToolUi";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/verify" element={<ReferEarn />} />
        <Route path="/verified" element={<VerifiedResp />} />
        <Route path="/refer" element={<ReferEarn />} />
        <Route path="/slider" element={<SliderMob />} />
      </Routes> 
      
      {/* <PenTool/>
      {/* <PenToolUi/> */}
    </div>
  );
}

export default App;
