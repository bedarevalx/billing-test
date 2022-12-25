import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axiosInstance';

export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get('/all');
      if (response.status !== 200) {
        return rejectWithValue('Server error!');
      }
      const data = response.data.map((country, id) => {
        return {
          id: id,
          name: country.name.common,
          capital: country?.capital?.[0] ?? 'Отсутствует',
          region: country.continents[0],
          flag: country.flags.svg,
          population: country.population,
        };
      });
      return data;
    } catch (error) {
      alert('Something went wrong! Server error!');
      return rejectWithValue('Something went wrong! Server error');
    }
  },
);

const handleEditCountry = (state, action) => {
  state.countries = state.countries.map((country) => {
    if (country.id === action.payload.id) {
      country.name = action.payload.name;
      country.population = action.payload.population;
      country.region = action.payload.region;
      country.capital = action.payload.capital;
    }
    return country;
  });
};
const initialState = {
  countries: [],
  isLoading: false,
  error: '',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    editCountry: handleEditCountry,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoading = false;
        state.error = '';
      });
  },
});

export const { editCountry } = countrySlice.actions;

export default countrySlice.reducer;
