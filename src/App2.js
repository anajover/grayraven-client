import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Admin from "./pages/auth/Admin";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import ConstructList from "./pages/constructs/ConstructList";
import ConstructDetails from "./pages/constructs/ConstructDetails";
import ConstructEdit from "./pages/constructs/ConstructEdit";
import MemoryList from "./pages/memories/MemoryList";
import MemoryDetails from "./pages/memories/MemoryDetails";
import MemoryEdit from "./pages/memories/MemoryEdit";
import WeaponList from './pages/weapons/WeaponList';
import WeaponDetails from './pages/weapons/WeaponDetails';
import WeaponEdit from './pages/weapons/WeaponEdit';
import Navbar from './components/Navbar';
import ConstructForm from './pages/constructs/ConstructForm';
import AdminProfile from './pages/profile/AdminProfile';
import Ejemplo from './pages/constructs/Ejemplo';

function App2() {
  return (
    <div className="App">



    <Routes>

      <Route path="/" element={ <Home /> } />

      {/* Rutas de Construct */}
      <Route path="/constructs/create" element={<ConstructForm/>}/>
      <Route path="/constructs" element={ <ConstructList/> } />
      <Route path="/constructs/:id" element={ <ConstructDetails/> } />
      <Route path="/constructs/:id/edit" element={ <ConstructEdit/> } />
      <Route path="/constructs/ejemplo" element={<Ejemplo/>} />

      {/* Rutas de Memory */}
      <Route path="/memories" element={ <MemoryList/> } />
      <Route path="/memories/:id/details" element={ <MemoryDetails/> } />
      <Route path="/memories/:id/edit" element={ <MemoryEdit/> } />

      {/* Rutas de Weapon */}
      <Route path="/weapons" element={ <WeaponList/> } />
      <Route path="/weapons/:id" element={ <WeaponDetails/> } />
      <Route path="/weapons/:id/edit" element={ <WeaponEdit/> } />

      {/* Rutas Administrador */}
      <Route path="/admin" element={ <Admin /> } />
      <Route path="/admin/profile" element={<AdminProfile/>}/>

      {/* Routes de errores */}
      <Route path="/error" element={ <Error/> } />
      <Route path="*" element={ <NotFound/> } />

    </Routes>
      
    </div>
  );
}

export default App2;
