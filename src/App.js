import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import Content from "./Content/Content";

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
