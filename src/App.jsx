
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Trade from './pages/Trade';
import BuyCrypto from './pages/BuyCrypto';
import Market from './pages/Market';
import Pocket from './pages/Pocket';
import Future from './pages/Future';
import Square from './pages/Square';
import Earn from './pages/Earn';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Pocket/>} />
            <Route path="/buyctrypto" element={<BuyCrypto/>} />
            <Route path="/market" element={<Market/>} />
            <Route path="/trade" element={<Trade/>} />
            <Route path="/future" element={<Future/>} />
            <Route path="/square" element={<Square/>} />
            <Route path="/earn" element={<Earn/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
