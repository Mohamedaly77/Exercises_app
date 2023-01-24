import React, { useEffect, useState } from 'react';
import { Stack, Box, TextField, Typography, Button } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchFromAPi';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExcercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const bodyPartData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartData]);
    };

    fetchExercises();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) => (
          (exercise) => exercise.name.toLowerCase().includes(search),
          exercise.bodyPart.toLowerCase().includes(search),
          exercise.target.toLowerCase().includes(search),
          exercise.equipment.toLowerCase().includes(search)
        )
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', sm: '30px' },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Excercies"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: {
              lg: '175px',
              sm: '80px',
            },
            fontSize: { lg: '16px', xs: '12px' },
            height: '56px',
            position: 'absolute',
            righT: '0',
          }}
          onClick={handleSearch}
        >
          Excercises{' '}
        </Button>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px',
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
