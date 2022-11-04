
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BestModal from './Components/BestModal';
import AllModel from './Components/AllModel';
import Comparison from './Components/Comparison';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='bestmodal' element={<BestModal />}></Route>
        <Route path='comparison' element={<Comparison />}></Route>
        <Route path='Allmodels' element={<AllModel />}></Route>
      </Routes>
    </div>
  );
}

export default App;

//0000600017
//1234567