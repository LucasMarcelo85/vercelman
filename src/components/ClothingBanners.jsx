import { Box, Grid, Typography } from '@mui/material';

const ClothingBanners = () => {
  const banners = [
    { title: 'Pagamento seguro', img: '/servico-de-entrega.gif' },
    { title: 'Atendimento online', img: '/smartphone.gif' },
    { title: 'Entrega rápida', img: '/entrega-por-correio.gif' },
    { title: 'Satisfação do cliente', img: '/conecte-se.gif' },
  ];

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f7f7f7' }}>
      <Grid container spacing={5} justifyContent="center">
        {banners.map((banner, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                height: '250px',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '15px',
                backgroundColor: '#ffffff',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              {/* GIF image */}
              <Box
                component="img"
                src={banner.img}
                alt={banner.title}
                sx={{
                  height: '100px',
                  width: '100px',
                  objectFit: 'contain',
                  marginBottom: '15px',
                }}
              />

              {/* Banner Title */}
              <Typography variant="h6" sx={{ color: '#1976d2', textAlign: 'center', fontWeight: 'bold' }}>
                {banner.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClothingBanners;
