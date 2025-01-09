import { Box, Grid, Typography, Button } from '@mui/material';

const ClothingBanners = () => {
  const banners = [
    { title: 'Vercel Man', description: 'Roupa M', img: '/adicionar-ao-carrinho.png' },
    { title: 'Vercel Man', description: 'Roupa M', img: '/adicionar-ao-carrinho.png' },
    { title: 'Vercel Man', description: 'Roupa M', img: '/adicionar-ao-carrinho.png' },
    
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2} justifyContent="center">
        {banners.map((banner, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                height: '200px',
                backgroundImage: `url(${banner.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                color: '#fff',
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                {banner.title}
              </Typography>
              <Typography variant="body1">
                {banner.description}
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
                Oferta
              </Button>

              
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClothingBanners;
