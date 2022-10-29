import  {BrowserRouter, Routes, Route} from 'react-router-dom';

import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import NuevoPassword from './paginas/NuevoPassword';
import AdministrarPacientes from './paginas/AdministrarPacientes';
import EditarPerfil from './paginas/EditarPerfil';
import CambiarPassword from './paginas/CambiarPassword';

import { AuthProvider } from './context/AuthProvider';
import { PacienteProvider } from './context/PacientesProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacienteProvider>
          <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path='registrar' element={<Registrar/>}/>
              <Route path='olvide-password' element={<OlvidePassword/>}/>
              <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
              <Route path='confirmar-cuenta/:id' element={<ConfirmarCuenta/>} />
            </Route>

            <Route path='/admin' element={<RutaProtegida/>}>
              <Route index element={<AdministrarPacientes/>}/>
              <Route path='perfil' element={<EditarPerfil/>}/>
              <Route path='cambiar-password' element={<CambiarPassword/>}/>
            </Route>
          </Routes>
        </PacienteProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
