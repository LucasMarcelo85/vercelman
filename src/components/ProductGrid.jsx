import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const products = [
  { id: 1, name: 'Verce1', price: 25.00, img: '/banner1.jpeg' },
  { id: 2, name: 'Verce2', price: 120.00, img: '/banner1.jpeg' },
  { id: 3, name: 'Verce3', price: 80.00, img: '/banner1.jpeg' },
  { id: 4, name: 'Verce4', price: 50.00, img: '/banner1.jpeg' },
];

const ProductGrid = ({ addToCart }) => {
  return (
    <Grid container spacing={3} sx={{ padding: 2 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={product.img}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                R$ {product.price.toFixed(2)}
              </Typography>

              {/* Usar a função addToCart */}
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 1 }}
                onClick={() => addToCart(product)} // Adiciona o produto ao carrinho
              >
                Adicionar ao carrinho
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
