import { Typography } from "@material-ui/core";

function CadastroUsuarios() {
  return <Typography>Cadastro de Usuários</Typography>;


//   import { useEffect } from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import { useParams } from "react-router-dom";
//   import EstruturaDaPagina from "../../components/EstruturaDaPagina";
//   import Section from "../../components/Section";
//   import Cadastro from "../../filme/Cadastro";
//   import { buscarFilme, inserirFilme, atualizarFilme, limparFilmeAtual } from "../../redux/filme/actions";
//   import { getFilmeAtual } from "../../redux/filme/selectors";
  
//   const PageCadastroFilme = props => {
  
//       const { id } = useParams();
  
//       const filmeEmEdicao = useSelector(getFilmeAtual);
//       const dispatch = useDispatch();
  
  
//       useEffect(() => {
//           console.log("filmeEmEdicao no Update", filmeEmEdicao);
  
//           return () => console.log("encerrou o componente");
//       }, [filmeEmEdicao]);
  
//       useEffect(() => {
//           if (!id) {
//               return;
//           }
  
//           dispatch(buscarFilme(id));        
  
//           return () => dispatch(limparFilmeAtual());
//       }, [dispatch, id]);
  
  
//       const salvarFilme = (filme) => {
//           if (filme.id) {
//               dispatch(atualizarFilme(filme));
//               return;
//           }
  
//           dispatch(inserirFilme(filme));
//       }
  
//       const limparFilmesEmEdicao = () => {
//           console.log("filmeEmEdicao", filmeEmEdicao);        
//       }
  
//       return (
  
//           <EstruturaDaPagina title="Filmes" >
//               <Section titulo="Cadastro de Filmes" >
//                   <Cadastro filme={filmeEmEdicao} salvar={salvarFilme} limpar={limparFilmesEmEdicao} />
//               </Section>
//           </EstruturaDaPagina>
  
//       )
  
//   }
  
//   export default PageCadastroFilme;



}
export default CadastroUsuarios;