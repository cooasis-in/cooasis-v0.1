import Slider from "react-slick";
import "./App.css";
import EcosystemSignup from "./pages/EcosystemSignup/EcosystemSignup";
import { Routes, Route } from "react-router-dom";
import ReferEarn from "./components/mobileResponsive/referEarn/ReferEarn";
import VerifiedResp from "./components/mobileResponsive/verified/VerifiedResp";
import SliderMob from "./components/mobileResponsive/sliderResp/SliderMob";
// import PenTool from "./components/penTool/PenTool";
import PenToolUi from "./components/penTool/PenToolUi";
import UserRegister from "./pages/auth/UserRegister";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/" element={<EcosystemSignup />} />
        <Route path="/verify" element={<ReferEarn />} />
        <Route path="/verified" element={<VerifiedResp />} />
        <Route path="/refer" element={<ReferEarn />} />
        <Route path="/slider" element={<SliderMob />} />
      </Routes>

      {/* <PenTool/>
      {/* <PenToolUi/> */}
      {/* <FillInYourDetails /> */}
      {/* <PenToolUi /> */}
      {/* <UserSignIn/> */}
        <Route path="/fill-your-details" element={<FillInYourDetails />} />
      </Routes>
      {/* <PenTool/> */}
      {/* <PenToolUi/> */}
    </div>
  );
}

export default App;
