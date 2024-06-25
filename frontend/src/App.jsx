import Slider from "react-slick";
import "./App.css";
import EcosystemSignup from "./components/EcosystemSignup/EcosystemSignup";
import EmailVerify from "./components/emailVerify/EmailVerify";
import { Routes, Route } from "react-router-dom";
// import ReferEarn from "./components/mobileResponsive/referEarn/ReferEarn";
// import StYourJourney from "./components/startYourJourney/StYourJourney";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<EcosystemSignup />} />
        <Route path="/verify" element={<EmailVerify />} />
      </Routes>
      {/* <ReferEarn />
      <StYourJourney /> */}
    </div>
  );
}

export default App;
