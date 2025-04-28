import './App.css';
import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import { ChooseRole } from './MainMenu/ChooseRole';
import { EmployeeScr } from './Pages/Employees/EmployeeScr';
import { Manager } from './Pages/Manager/Manager';
import { Busstaff } from './Pages/Employees/BusStaff/BusStaff';
import { Host } from './Pages/Employees/Host/Host';
import { Kitchen } from './Pages/Employees/Kitchen/Kitchen';
import { WaitStaff } from './Pages/Employees/WaitStaff/WaitStaff';
import { HostMenu } from './Pages/Employees/Host/HostMenu';
import {TableManagementLink} from './shared links/TableManagementLink'
import { KitchenOrders } from './Pages/Employees/Kitchen/KitchenOrders';
import {CreateProfile} from './Pages/Manager/CreateProfile';
import { TakeOrder} from './Pages/Employees/WaitStaff/TakeOrder';
import { TableManagementLinkSection2 } from './shared links/TableManagementLinkSection2';
function App() {
    
    return (
        <div> <h1 className="Title">Restaurant Management</h1>

        
        <Router>
           <Routes>

               <Route path="/" element={<ChooseRole/>}/>

               //Defines Route to Employee's Page
               <Route path="/EmployeeScr" element={<EmployeeScr/>}/>

               //Defines to Manager Page
               <Route path="/Manager" element={<Manager/>}/>

               //Defines to Bus Staff Page
               <Route path="/BusStaff" element={<Busstaff/>}/>

               //Defines to Host Page
               <Route path="/Host" element={<Host/>}/>
               
               //Defines to Host Menu Page
               <Route path="/HostMenu" element={<HostMenu/>}/>

               //Defines to Kitchen Page
               <Route path="/Kitchen" element={<Kitchen/>}/>

               //Defines to Wait Staff Page
               <Route path="/WaitStaff" element={<WaitStaff/>}/>

               <Route path="/TableManagementLink" element={<TableManagementLink/>}/>
               
               <Route path="/KitchenOrders" element={<KitchenOrders/>}/>

               <Route path="/CreateProfile" element={<CreateProfile/>}/>

               <Route path="/TakeOrder" element={<TakeOrder/>}/>

               <Route path="/TableManagementLinkSection2" element={<TableManagementLinkSection2/>}/>
           </Routes>
           </Router>

       
        </div>
        
       
        
    )

       
    

}

   
  
export default App;

  
 