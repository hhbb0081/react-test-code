import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";

import Home from './Pages/Home/Home';
import Works from "./Pages/Works/Works";
import About from "./Pages/About/About";

function App() {
  return (
      <>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/works" element={<Works />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
      </>
  );
}

export default App;
