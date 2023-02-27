import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Layout from './component/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
