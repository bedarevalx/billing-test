import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Controls from './controls/Controls';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { editCountry } from '../store/slices/CountriesSlice';
import Alert from './Alert';

const EditForm = ({ country }) => {
  const dispatch = useDispatch();
  const [isSucceeded, setIsSucceeded] = React.useState(false);
  const [isAlertShowing, setIsAlertShowing] = React.useState(false);
  const { formErrors, validate } = useForm({
    name: false,
    region: false,
    capital: false,
    population: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const editedCountry = {
      name: data.get('name'),
      capital: data.get('capital'),
      region: data.get('region'),
      population: data.get('population'),
    };
    if (validate(editedCountry)) {
      editedCountry.id = country.id;
      setIsSucceeded(true);
      dispatch(editCountry(editedCountry));
    } else {
      setIsSucceeded(false);
    }
    setIsAlertShowing(true);
  };

  return (
    <section className='mx-auto px-xl-20 py-xl-7 px-lg-5 py-lg-5 px-lg-10'>
      <div className='bg-white border border-secondary border-opacity-25 shadow-lg rounded '>
        <h4 className='bg-secondary bg-opacity-10 p-3 rounded-top'>
          Изменение информации о стране
        </h4>
        <div className='px-sm-5 px-2'>
          <Alert
            isSucceeded={isSucceeded}
            alertVisibility={isAlertShowing}
            setAlertVisibility={setIsAlertShowing}
            successText={'Данные успешно сохранены'}
            errorText={
              'Не удалось сохранить! Проверьте введенные данные'
            }></Alert>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Controls.Input
                error={formErrors.name}
                defaultValue={country?.name}
                name={'name'}
                label={'Название страны'}></Controls.Input>
              <Controls.Input
                error={formErrors.capital}
                defaultValue={country?.capital}
                name={'capital'}
                label={'Столица'}></Controls.Input>
              <Controls.Input
                error={formErrors.region}
                defaultValue={country?.region}
                name={'region'}
                label={'Регион'}></Controls.Input>
              <Controls.Input
                error={formErrors.population}
                defaultValue={country?.population}
                name={'population'}
                label={'Население'}></Controls.Input>
              <Grid item xs={12} sm={6}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 2, mb: 2 }}>
                  Сохранить
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                  <Button fullWidth variant='outlined' sx={{ mt: 2, mb: 2 }}>
                    Отмена
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default EditForm;
