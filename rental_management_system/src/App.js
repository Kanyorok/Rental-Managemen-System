import './App.css';
import Menu from './Header/Menu';
import SubMenu from './Header/SubMenu';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
