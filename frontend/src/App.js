import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import DeveloperScreen from "./screens/DeveloperScreen";

const App = () => {
  return (
    <>
        <Router>
          <Header />
          <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/developer" element={<DeveloperScreen />} />
            </Routes>
          </Container>
          </main>
          <Footer />
        </Router>
    </>
  );
}

export default App;
