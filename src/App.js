import "./App.scss";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Login from "./Component/Login";
import { Home } from "./Component/Nav/Page/Home";
import { Header } from "./Component/Nav/Header/Header";
import { Email } from "./Component/Nav/Page/Email";
import { Sms } from "./Component/Nav/Page/Sms";
import { Opp } from "./Component/Nav/Page/Opp";
import { Option } from "./Component/Nav/Page/Option";
import { Landing } from "./Component/Nav/Page/Landing";
import { useState } from "react";
import Campain from "./Component/Nav/Page/Campain";
function App() {
  const [check, setCheck] = useState(false);

  return (
    <div className="App">
      {check ? (
        <div className="Nav">
          <BrowserRouter>
            <Header />
            <div className="Navbar">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/campain" element={<Campain />} />
                <Route path="/oop" element={<Opp />} />
                <Route path="/email" element={<Email />} />
                <Route path="/sms" element={<Sms />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/option" element={<Option />} />
              </Routes>
            </div>
            <div className="content">
              <Outlet />
            </div>
          </BrowserRouter>
        </div>
      ) : (
        <Login setCheck={setCheck} />
      )}
    </div>
  );
}

export default App;
