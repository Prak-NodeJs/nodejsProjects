
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/cart' element={<Cart />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
