import logo from './logo.svg';
import './App.css';
import Addvisitor from './components/Addvisitor';
import ViewAllVisitor from './components/ViewAllVisitor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Addvisitor/>}/>
        <Route path='/view' element={<ViewAllVisitor/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
