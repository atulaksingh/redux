import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
   <Provider store={store}>
   <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
   </Provider>
    </div>
  );
}

export default App;
