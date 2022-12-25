import React from 'react';
import { useSelector } from 'react-redux';
import EditForm from '../components/EditForm';
import MainLayout from '../layouts/MainLayout';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ListPage = () => {
  const { id } = useParams();
  const countries = useSelector((state) => state.country.countries);
  const isLoading = useSelector((state) => state.country.isLoading);
  return (
    <MainLayout>
      {isLoading ? (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          minHeight='560px'>
          <CircularProgress />
        </Box>
      ) : (
        <EditForm
          country={countries.find(
            (country) => country.id === Number(id),
          )}></EditForm>
      )}
    </MainLayout>
  );
};

export default ListPage;
