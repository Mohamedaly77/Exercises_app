import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: '212px',
          xs: '70px',
        },

        ml: {
          sm: '50px',
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        style={{ color: '#ff2625', fontWeight: '600', fontSize: '26px' }}
      >
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            sm: '40px',
          },
        }}
        mb="20px"
        mt="30px"
      >
        Sweet , Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check put the most effective exercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#excercises"
        padding="15px"
      >
        Explore Excercises
      </Button>

      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: {
            lg: 'block',
            xs: 'none',
          },
        }}
        fontSize="200px"
      >
        Excercises{' '}
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
