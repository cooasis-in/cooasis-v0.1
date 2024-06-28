import "./App.css";
import FillInYourDetails from "./components/FillInYourDetails/FillInYourDetails";
import { Routes, Route } from "react-router-dom";
import ReferEarn from "./components/mobileResponsive/referEarn/ReferEarn";
import VerifiedResp from "./components/mobileResponsive/verified/VerifiedResp";
import SliderMob from "./components/mobileResponsive/sliderResp/SliderMob";
import PenTool from "./components/penTool/PenTool";
import PenToolUi from "./components/penTool/PenToolUi";
import UserRegister from "./pages/auth/UserRegister";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/verify" element={<ReferEarn />} />
        <Route path="/verified" element={<VerifiedResp />} />
        <Route path="/refer" element={<ReferEarn />} />
        <Route path="/slider" element={<SliderMob />} />
      </Routes>
    </div>
  );
}

export default App;
