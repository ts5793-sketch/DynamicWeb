// import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => { }, [entries]);

  // storing the input info by the user
  function addEntry(entry) {
    setEntries(prev => [entry, ...prev]);
  }

  // and deleting when needed
  function deleteEntry(id) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = "/" element = {
          <Home entries = {entries} onAdd = {addEntry} onDelete = {deleteEntry}/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;