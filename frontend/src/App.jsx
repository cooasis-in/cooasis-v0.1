import "./App.css";
import EcosystemSignup from "./components/EcosystemSignup/EcosystemSignup";
import EmailVerify from "./components/emailVerify/EmailVerify";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<EcosystemSignup />} />
        <Route path="/verify" element={<EmailVerify />} />
      </Routes>
    </div>
  );
}

export default App;
