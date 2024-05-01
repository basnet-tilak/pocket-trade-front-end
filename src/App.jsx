
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Trade from './pages/Trade';
import BuyCrypto from './pages/BuyCrypto';
import Market from './pages/Market';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Trade/>} />
            <Route path="/buyctrypto" element={<BuyCrypto/>} />
            <Route path="/market" element={<Market/>} />
            <Route path="/" element={<Trade/>} />
            <Route path="/" element={<Trade/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
