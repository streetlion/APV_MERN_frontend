import {Link} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
   const {cerrarSesion} = useAuth();

  return (
     <header className=" bg-indigo-600 py-10">
         <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-center text-indigo-200">Administrador de Pacientes de {''} <span className="text-white font-black">Veterinaria</span> </h1>

            <nav className='flex gap-4 flex-col lg:flex-row mt-5 lg:mt-0 items-center'>
               <Link to="/admin" className='text-white text-sm uppercase font-bold'>Pacientes</Link>
               <Link to="/admin/perfil" className='text-white text-sm uppercase font-bold'>Perfil</Link>

               <button
                  type='button'
                  className='text-white text-sm uppercase font-bold'
                  onClick={cerrarSesion}
               >Cerrar Sesión</button>

            </nav>
         </div>
     </header>
  )
}

export default Header