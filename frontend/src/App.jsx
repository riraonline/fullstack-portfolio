import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Message from './components/Message';
import Status from './components/Status';
import ReadMessage from './components/ReadMessage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar></Navbar>
              <Hero></Hero>
              <About></About>
              <Skill></Skill>
              <Portfolio></Portfolio>
              <Contact></Contact>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route path="/messages" element={<Message />}></Route>
        <Route path="/messages/read/:id" element={<ReadMessage />}></Route>
        <Route path="/status" element={<Status />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
