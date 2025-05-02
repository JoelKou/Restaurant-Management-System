import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ChooseRole } from './MainMenu/ChooseRole';
import { EmployeeScr } from './Pages/Employees/EmployeeScr';
import { Manager } from './Pages/Manager/Manager';
import { Busstaff } from './Pages/Employees/BusStaff/BusStaff';
import { Host } from './Pages/Employees/Host/Host';
import { Kitchen } from './Pages/Employees/Kitchen/Kitchen';
import { WaitStaff } from './Pages/Employees/WaitStaff/WaitStaff';
import { HostMenu } from './Pages/Employees/Host/HostMenu';
import { TableManagementLink } from './shared links/TableManagementLink';
import { KitchenOrders } from './Pages/Employees/Kitchen/KitchenOrders';
import { CreateProfile } from './Pages/Manager/CreateProfile';

function App() {
  return (
    <div>
      <h1 className="Title">Restaurant Management</h1>
      <Router>
        <Routes>
          <Route path="/" element={<ChooseRole />} />
          
          // Defines Route to Employee's Page
          <Route path="/EmployeeScr" element={<EmployeeScr />} />
          
          // Defines Route to Manager Page
          <Route path="/Manager" element={<Manager />} />
          
          // Defines Route to Bus Staff Page
          <Route path="/BusStaff" element={<Busstaff />} />
          
          // Defines Route to Host Page
          <Route path="/Host" element={<Host />} />
          
          // Defines Route to Host Menu Page
          <Route path="/HostMenu" element={<HostMenu />} />
          
          // Defines Route to Kitchen Page
          <Route path="/Kitchen" element={<Kitchen />} />
          
          // Defines Route to Wait Staff Page
          <Route path="/WaitStaff" element={<WaitStaff />} />
          
          // Defines Route to Table Management Link Page
          <Route path="/TableManagementLink" element={<TableManagementLink />} />
          
          // Defines Route to Kitchen Orders Page
          <Route path="/KitchenOrders" element={<KitchenOrders />} />
          
          // Defines Route to Create Profile Page
          <Route path="/CreateProfile" element={<CreateProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

