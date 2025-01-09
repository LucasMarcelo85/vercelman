import { Box, Grid, Typography } from '@mui/material';

const QuadrupleBanners = () => {
  const banners = [
    { title: 'Blusas', description: 'Descrição ', img: '/banner1.jpeg' },
    { title: 'Shorts', description: 'Descrição ', img: '/banner1.jpeg' },
    { title: 'Bermudas', description: 'Descrição ', img: '/banner1.jpeg' },
    { title: 'Conjutos', description: 'Descrição ', img: '/banner1.jpeg' },
  ];

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} justifyContent="center">
        {banners.map((banner, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <Box
              sx={{
                height: '300px',
                width: '100%',
                backgroundImage: `url(${banner.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderRadius: '12px',
                padding: '20px',
                color: '#fff',
                textAlign: 'center',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.2)',
                },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Overlay to darken the image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 1,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  zIndex: 2,
                  marginBottom: '10px',
                }}
              >
                {banner.title}
              </Typography>
              <Typography variant="body1" sx={{ zIndex: 2 }}>
                {banner.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuadrupleBanners;
