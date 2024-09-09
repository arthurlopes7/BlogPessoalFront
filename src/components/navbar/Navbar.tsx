import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

   
    if (!authContext) {
        return null;
    }

    const { usuario, handleLogout,  } = authContext;

    function logout() {
        if (handleLogout) {
            handleLogout();
            ToastAlerta('O usuário foi desconectado com sucesso!', 'info')
            navigate('/');
        }
    }

    let component: ReactNode;

    if (usuario.token !== ""){

        component = (

            <div className='flex justify-center bg-indigo-900 py-4 w-full text-white'>
                <div className="flex justify-between text-lg container"></div>
            <Link to='/home' className="text-2xl font-bold">Blog DEV Arthur</Link>
            <div className='flex gap-4'>
                <Link to='/postagens' className='hover:underline'>Postagens</Link>
                <Link to='/temas' className='hover:underline'>Temas</Link>
                <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                <Link to='/perfil' className='hover:underline'>Perfil</Link>
                <Link to='' onClick={logout} className="hover:underline">
                    Sair
                </Link>
            </div>
        </div>
        )
    }

    return (
        <>
            { component }
            </>
    );
}

export default Navbar;
