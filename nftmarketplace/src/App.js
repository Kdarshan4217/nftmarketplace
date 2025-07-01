// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Explore from './pages/Explore';
// import NFTDetails from './pages/NFTDetails';
// import CreateNFT from './pages/CreateNFT';
// import Profile from './pages/Profile';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ServerError from './pages/ServerError';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/nft/:id" element={<NFTDetails />} />
//         <Route path="/create" element={<CreateNFT />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/500" element={<ServerError />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './pages/Home';
import Explore from './pages/Explore';
import NFTDetails from './pages/NFTDetails';
import CreateNFT from './pages/CreateNFT';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/nft/:id" element={<NFTDetails />} />
          <Route path="/create" element={<CreateNFT />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

