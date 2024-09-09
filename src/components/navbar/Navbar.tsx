
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
        <div className="w-full flex justify-center py-4 bg-lilac-500 text-white">
            <div className="container flex justify-between items-center text-lg">
                <Link to='/home' className="text-2xl font-bold">Blog DEV Arthur</Link>
                <div className="flex gap-6">
                    <Link to='/temas' className='hover:underline'>Temas</Link>
                    <Link to='/cadastrartema' className='hover:underline'>Cadastrar Tema</Link>
                    <Link to='/perfil' className='hover:underline'>Perfil</Link>
                    {usuario && usuario.token ? (
                        <button onClick={logout} className="hover:underline">
                            Sair
                        </button>
                    ) : (
                        <Link to='/login' className='hover:underline'>
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
