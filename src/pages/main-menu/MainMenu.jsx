import { Typography } from "@mui/material";
import EstruturaMainMenu from "../../components/main-menu/EstruturaMainMenu";

const MainMenu = () => {

    // const { id } = useParams();
    // const [filmeEmEdicao, setFilmesEmEdicao] = useState();


    // useEffect(() => {
    //     console.log("filmeEmEdicao no Update", filmeEmEdicao);

    //     return () => console.log("encerrou o componente");
    // }, [filmeEmEdicao]);

    // useEffect(() => {
    //     if(!id){
    //         setFilmesEmEdicao(FILME_INICIAL);
    //         return;
    //     }
    //   carregarFilme(id);
    // }, [id]);

    // const carregarFilme = async id => {
    //     const filme = await FilmesAPI.buscarFilme(id);
    //     setFilmesEmEdicao(filme);
    // }

    // const salvarFilme = (filme) => {
    //     if (filme.id) {
    //         FilmesAPI.atualizarFilme(filme).then(() => {
    //             setFilmesEmEdicao(null);
    //         });
    //         return;
    //     }

    //     FilmesAPI.inserirFilme(filme).then(() => {
    //         setFilmesEmEdicao(null);
    //     });
    // }

    // const limparFilmesEmEdicao = () => {
    //     console.log("filmeEmEdicao", filmeEmEdicao);
    //     setFilmesEmEdicao(null);
    // }

    return (
        <>
            <EstruturaMainMenu > 
                <Typography>Bem-Vindo ao SAB.</Typography>               
            </EstruturaMainMenu>
        </>
    )

}

export default MainMenu;