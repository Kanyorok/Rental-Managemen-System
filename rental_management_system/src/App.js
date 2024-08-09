import './App.css';
import Menu from './Header/Menu';
import SubMenu from './Header/SubMenu';
import CustomerDetails from './CustomerDashboard/CustomerDetails';
import CustomerDash from './CustomerDashboard/CustomerDash';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='main-body'>
      <Router>
        <Menu/>
        <SubMenu/>
        <Routes>
          <Route path='/customer-dash' element={<CustomerDash/>}/>
          <Route path='/customer-dash/:id' element={<CustomerDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
