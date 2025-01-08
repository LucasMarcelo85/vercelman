import  { useState } from 'react';
import {
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = (open) => () => {
    setCartOpen(open);
  };

  return (
    <>
      {/* Ícone do carrinho com o contador */}
      <IconButton color="inherit" onClick={toggleCart(true)}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      {/* Drawer para mostrar os itens no carrinho */}
      <Drawer anchor="right" open={cartOpen} onClose={toggleCart(false)}>
        <div style={{ width: 300, padding: 20 }}>
          <Typography variant="h6">Meu Carrinho</Typography>
          
          {cartItems.length === 0 ? (
            <Typography variant="body2">Seu carrinho está vazio</Typography>
          ) : (
            <List>
              {cartItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={item.name}
                    secondary={`R$ ${item.price.toFixed(2)}`}
                  />
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => onRemoveFromCart(index)}
                  >
                    Remover
                  </Button>
                </ListItem>
              ))}
            </List>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
