import { Skeleton } from '@mui/material';
import React from 'react';
import Card from './Card';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CardList = ({ countries, isLoading }) => {
  return (
    <div className='row p-xxl-10 p-xl-8 p-md-6 p-sm-5 p-4'>
      {isLoading ? (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          minHeight='560px'>
          <CircularProgress />
        </Box>
      ) : (
        countries.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            flag={country.flag}
            name={country.name}
            region={country.region}
            capital={country.capital}
            population={country.population}></Card>
        ))
      )}
    </div>
  );
};

export default CardList;
