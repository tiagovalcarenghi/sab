import { Typography } from "@material-ui/core";
import EstruturaMainMenu from "../../../../components/main-menu/EstruturaMainMenu";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CadastroPessoas = props => {

  let { edit } = useParams();


  useEffect(() => {

    console.log(`/main-menu/cadastro/pessoas/${edit}`);

    if (edit == 'new') {
      console.log('novo');
      //setFilmesEmEdicao(FILME_INICIAL);
      return;
    }
    carregaFiltros();
  }, [edit]);


  const carregaFiltros = async => {
    console.log('editar');
    // const filme = await FilmesAPI.buscarFilme(id);
    // setFilmesEmEdicao(filme);
  }

  return (

    <>
      <EstruturaMainMenu>
        <Typography>CADASTRO PESSOAS</Typography>
      </EstruturaMainMenu>
    </>
  );

}
export default CadastroPessoas;