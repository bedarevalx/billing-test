import React from 'react';
import { useSelector } from 'react-redux';
import CardList from '../components/CardList';
import MainLayout from '../layouts/MainLayout';

const ListPage = () => {
  const countries = useSelector((state) => state.country.countries);
  const isLoading = useSelector((state) => state.country.isLoading);
  return (
    <MainLayout>
      <CardList countries={countries} isLoading={isLoading}></CardList>
    </MainLayout>
  );
};

export default ListPage;
