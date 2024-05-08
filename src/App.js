import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          
        </Route>
        <Route path="/" element={<section className="flex flex-col justify-center items-center lg:px-5 px-2 pt-5"><CallToAction/></section>} />
      </Routes>
    </Router>
  );
}

export default App;
