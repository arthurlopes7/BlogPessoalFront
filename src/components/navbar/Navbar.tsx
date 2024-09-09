import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Navbar() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

   
    if (!authContext) {
        return null;
    }

    const { handleLogout, usuario } = authContext;

    function logout() {
        if (handleLogout) {
            handleLogout();
            alert('O usuário foi desconectado com sucesso!');
            navigate('/');
        }
    }

    return (
        <div className='w-full flex justify-center py-4'>
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
    );
}

export default Navbar;
