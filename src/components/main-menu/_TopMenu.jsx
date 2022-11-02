import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const paginas = [
    {   "id_pagina" : "1","pagina": "Cadastro"},


];
const acoes = ['Sair'];

const TopMenu = () => {

    const nav = useNavigate();


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        console.log(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        console.log(event.currentTarget);
    };

    const handleCloseNavMenu = (event, value) => {
        setAnchorElNav(null);
        console.log("Texto:" + event.target.innerText + value);

    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const logout = async () => {
        //await Auth.signOut();      
        //userHasAuthenticated(false);      
        nav("/login");

    }


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"

                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SAB
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/usuarios"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


                            {paginas.map((pagina) => (
                                <MenuItem key={pagina} >
                                    <Button
                                        variant="contained"
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <Typography textAlign="center" >{pagina}</Typography>
                                    </Button>
                                </MenuItem>

                            ))}



                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar />
                            </IconButton>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {acoes.map((acao) => (
                                    <MenuItem key={acao} onClick={logout}>
                                        <Typography textAlign="center">{acao}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default TopMenu;
