import  { useState } from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';
  import CheckroomIcon from '@mui/icons-material/Checkroom';
  import SearchIcon from '@mui/icons-material/Search';
  import Cart from './Cart'; // Componente de Carrinho
  
  const Header = ({ cartItems, onRemoveFromCart }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = (open) => () => {
      setDrawerOpen(open);
    };
  
    return (
      <>
        <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
          <Toolbar>
            {/* Botão do menu hambúrguer */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
  
            {/* Nome da loja */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              Vercel Man
            </Typography>
  
            {/* Ícone de busca */}
            <IconButton edge="end" color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
  
            {/* Carrinho */}
            <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
          </Toolbar>
        </AppBar>
  
        {/* Menu lateral */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CheckroomIcon />
              </ListItemIcon>
              <ListItemText primary="Produtos" />
            </ListItem>
          </List>
        </Drawer>
      </>
    );
  };
  
  export default Header;
  