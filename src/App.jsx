import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ListNews from "./components/ListNews/ListNews";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
            <Route path="/listNews" element={<GlobalProvider><ListNews /></GlobalProvider>} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
