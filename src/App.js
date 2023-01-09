import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDataAPI from "./components/AllDataAPI";
import MyFavorites from "./components/MyFavorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<MyFavorites />} />
            <Route exact path="/getAPIData" element={<AllDataAPI />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
