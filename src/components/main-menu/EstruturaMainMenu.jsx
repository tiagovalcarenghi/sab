import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PeopleIcon from '@mui/icons-material/People';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import EditIcon from '@mui/icons-material/Edit';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BadgeIcon from '@mui/icons-material/Badge';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Link } from 'react-router-dom';


const drawerWidth = 380;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,

    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,

  }),
  backgroundColor: '#FF9800',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#F9B046',
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'

}));


const EstruturaMainMenu = (props) => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //MENU:CADASTRO:
  const [openCadastro, setOpenCadastro] = React.useState(false);
  //MENU:CADASTRO.SUBMENUS:
  const [openCadastroPessoas, setOpenCadastroPessoas] = React.useState(false);
  const [openCadastroUsuarios, setOpenCadastroUsuarios] = React.useState(false);


  //  MENU:OPERAÇÕES
  const [openOperacoes, setOpenOperacoes] = React.useState(false);
  //  MENU:OPERAÇÕES.SUBMENUS
  const [openOperacoesCadCV, setOpenOperacoesCadCV] = React.useState(false);
  const [openOperacoesCadLocacao, setOpenOperacoesCadLocacao] = React.useState(false);




  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };



  //MENU:CADASTRO:
  const handleClickCadastro = () => {
    setOpenCadastro(!openCadastro);
  };
  //MENU:CADASTRO.SUBMENUS:
  const handleClickCadastroPessoas = () => {
    setOpenCadastroPessoas(!openCadastroPessoas);
  };
  const handleClickCadastroUsuarios = () => {
    setOpenCadastroUsuarios(!openCadastroUsuarios);
  };
 

  //MENU:OPERAÇÕES:
  const handleClickOperacoes = () => {
    setOpenOperacoes(!openOperacoes);
  };
  //MENU:OPERAÇÕES.SUBMENUS:
  const handleClickOperacoesCadCV = () => {
    setOpenOperacoesCadCV(!openOperacoesCadCV);
  };
  const handleClickOperacoesCadLocacao = () => {
    setOpenOperacoesCadLocacao(!openOperacoesCadLocacao);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SAB - Sistema Administrativo Bomlar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >

          {/* Menu:Cadastro */}

          <ListItemButton onClick={handleClickCadastro}>
            <ListItemIcon>
              <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText primary="Cadastro" />
            {openCadastro ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openCadastro} timeout="auto" unmountOnExit>

            <List component="div" disablePadding>

              {/* Menu:Operações / SubMenu: Pessoas */}


              <ListItemButton onClick={handleClickCadastroPessoas} sx={{ pl: 4 }} >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Pessoas" />
                {openCadastroPessoas ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openCadastroPessoas} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                  <ListItemButton component={Link} to={`/main-menu/cadastro/pessoas/${'new'}`} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <CreateNewFolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Novo" />
                  </ListItemButton>

                  <ListItemButton component={Link} to={`/main-menu/cadastro/pessoas/${'edit'}`} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary="Editar" />
                  </ListItemButton>

                </List>
              </Collapse>


              {/* Menu:Operações / SubMenu: Usuários */}

              <ListItemButton onClick={handleClickCadastroUsuarios} sx={{ pl: 4 }} >
                <ListItemIcon>
                  <BadgeIcon />
                </ListItemIcon>
                <ListItemText primary="Usuários" />
                {openCadastroUsuarios ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openCadastroUsuarios} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                  <ListItemButton component={Link} to={`/main-menu/cadastro/usuarios/${'new'}`} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <CreateNewFolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Novo" />
                  </ListItemButton>

                  <ListItemButton component={Link} to={`/main-menu/cadastro/usuarios/${'edit'}`} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary="Editar" />
                  </ListItemButton>

                </List>
              </Collapse>





            </List>
          </Collapse>


          <Divider />

          {/* Menu: Operações */}


          <ListItemButton onClick={handleClickOperacoes}>
            <ListItemIcon>
              <InsertDriveFileIcon />
            </ListItemIcon>
            <ListItemText primary="Operações" />
            {openOperacoes ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openOperacoes} timeout="auto" unmountOnExit>

            <List component="div" disablePadding>

              {/* Menu:Operações / SubMenu: Cadastro de Compra e Venda */}

              <ListItemButton onClick={handleClickOperacoesCadCV} sx={{ pl: 4 }} >
                <ListItemIcon>
                  <FileOpenIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastro de Compra e Venda" />
                {openOperacoesCadCV ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openOperacoesCadCV} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                  <ListItemButton onClick={handleClickOperacoesCadCV} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <CreateNewFolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Novo" />
                  </ListItemButton>

                  <ListItemButton onClick={handleClickOperacoesCadCV} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <FactCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consulta/Valida/Cancela" />
                  </ListItemButton>

                  <ListItemButton onClick={handleClickOperacoesCadCV} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary="Editar Rascunho" />
                  </ListItemButton>

                </List>
              </Collapse>

              {/* Menu:Operações / SubMenu: Cadastro de Locação */}
              <ListItemButton onClick={handleClickOperacoesCadLocacao} sx={{ pl: 4 }} >
                <ListItemIcon>
                  <SummarizeIcon />
                </ListItemIcon>
                <ListItemText primary="Cadastro de Locação" />
                {openOperacoesCadLocacao ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openOperacoesCadLocacao} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>

                  <ListItemButton onClick={handleClickOperacoesCadLocacao} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <CreateNewFolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Novo" />
                  </ListItemButton>

                  <ListItemButton onClick={handleClickOperacoesCadLocacao} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <FactCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consulta/Valida/Cancela" />
                  </ListItemButton>

                  <ListItemButton onClick={handleClickOperacoesCadLocacao} sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary="Editar Rascunho" />
                  </ListItemButton>

                </List>
              </Collapse>





            </List>
          </Collapse>







        </List>



      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {props.children}
      </Main>
    </Box>
  );
}

export default EstruturaMainMenu;
