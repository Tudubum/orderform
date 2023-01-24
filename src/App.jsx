import './App.css';
import Home from './components/Home';
import { Route, Routes} from 'react-router-dom'
import Add from './components/Add';
import Edit from './components/Edit'
import Navigation from './components/Navigation';

import { OrdersProvider } from '../src/components/OrdersContext';

function App() {
  return (
    <OrdersProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </OrdersProvider>
  );
}


export default App;
