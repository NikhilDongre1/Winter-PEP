import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import FormAction from "./Components/FormAction";

function App() {
  const [info, getInfo] = useState({
    name: "nikhil",
    email: "nik@gmail.com",
    age: "21",
    address: "xyz streets, asdfas, India",
  });

  const handleSubmit = (data) => {
    getInfo(data);
  };
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home data={info} />} />
          <Route
            path="/form"
            element={<FormAction onFormSubmit={handleSubmit} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
