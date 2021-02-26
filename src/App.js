import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import MemeHeader from "./components/MemeHeader";
import Contacts from "./components/Contacts";
import Form from "./components/FormContainer";
import MemeGenerator from "./components/MemeGenerator";
import HookEx from "./components/HookEx";

function App() {
  return (
    <div>
      <MemeHeader />
      <MemeGenerator />
      <HookEx />
    </div>
  );
}

export default App;
