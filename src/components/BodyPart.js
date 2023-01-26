import React from 'react';
import { Typography, Stack } from '@mui/material';
import icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  console.log(bodyPart);
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        background: '#fff',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={icon}
        alt="dumbell"
        style={{
          width: '40px',
          Height: '40px',
        }}
      />
      <Typography
        fontSize="26px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
