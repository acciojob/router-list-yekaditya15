import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Item Navigation System</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
