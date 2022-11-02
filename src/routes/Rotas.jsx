import Login from "../pages/login/Login";
import CadastroUsuarios from "../pages/main-menu/cadastro/usuarios/Usuarios";
import MainMenu from "../pages/main-menu/MainMenu"
import { useRoutes} from 'react-router-dom';
import Layout from "../components/main-menu/Layout";

const Rotas = () => useRoutes([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    // { path: "/main-menu", element: <MainMenu /> },
    { path: "/cadastro-usuarios", element: <CadastroUsuarios /> },
    { path: "/main-menu", element: <Layout /> },
    
    
]);

export default Rotas;