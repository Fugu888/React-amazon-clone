import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';



function App() {
  return (
   <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Routes>
   </>
  );
}

export default App;
