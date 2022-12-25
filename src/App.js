import React from 'react';
import EditPage from './pages/EditPage';
import ListPage from './pages/ListPage';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './store/slices/CountriesSlice';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <Routes>
      <Route path={'/'} element={<ListPage></ListPage>} />
      <Route path={'/edit/:id'} element={<EditPage></EditPage>} />
    </Routes>
  );
}

export default App;
