import Login from "../pages/login/Login";
import { useRoutes } from 'react-router-dom';
import MainMenu from "../pages/main-menu/MainMenu";
import CadastroPessoas from "../pages/main-menu/cadastro/pessoas/CadastroPessoas";
import CadastroUsuarios from "../pages/main-menu/cadastro/usuarios/CadastroUsuarios";

const Rotas = () => useRoutes([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/main-menu", element: <MainMenu /> },

    { path: "/main-menu/cadastro/pessoas/:edit", element: <CadastroPessoas /> },
    { path: "/main-menu/cadastro/usuarios/:edit", element: <CadastroUsuarios /> },





]);

export default Rotas;