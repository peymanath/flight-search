import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FlightResponse } from '@/types/components/SearchFieldsFlights';
import { Http } from '@/services/HttpRequestConfig';
import type { FlightsInitialStateType } from '@/types/store/store';
import { SortFlight } from '@/utilis/SortFlightsData';

export const getAsyncFlights = createAsyncThunk(
    'flights/getAsyncFlights',

    async (searchValue: string, { rejectWithValue }) => {
        try {
            return await Http.get<FlightResponse[], FlightResponse[]>(
                `https://api.beta.safrat.me/flight/place/search/?query=${searchValue || 'safrat'}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            );
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState: FlightsInitialStateType = {
    flights: [
        {
            child: false,
            resultType: 'airport',
            countryNames: 'India',
            cityNames: 'Surat',
            cityCode: 'STV',
            airportNames: 'Surat',
            airportCode: 'STV',
        },
        {
            child: false,
            resultType: 'city',
            countryNames: 'India',
            cityNames: 'Surat',
            cityCode: 'STV',
            airportNames: 'Surat',
            airportCode: 'STV',
        },
        {
            child: true,
            resultType: 'city',
            countryNames: 'India',
            cityNames: 'Surat',
            cityCode: 'STV',
            airportNames: 'Surat',
            airportCode: 'STV',
        },
        {
            child: false,
            resultType: 'city',
            countryNames: 'Russia',
            cityNames: 'Saratov',
            cityCode: 'RTW',
            airportNames: 'Saratov Gagarin Airport',
            airportCode: 'GSV',
        },
        {
            child: true,
            resultType: 'city',
            countryNames: 'Russia',
            cityNames: 'Saratov',
            cityCode: 'RTW',
            airportNames: 'Saratov Gagarin Airport',
            airportCode: 'GSV',
        },
        {
            child: true,
            resultType: 'city',
            countryNames: 'Russia',
            cityNames: 'Saratov',
            cityCode: 'RTW',
            airportNames: 'SDSDSD',
            airportCode: 'GDV',
        },
        {
            child: false,
            resultType: 'city',
            countryNames: 'Cape Verde',
            cityNames: 'Sal',
            cityCode: 'SID',
            airportNames: 'Amílcar Cabral International',
            airportCode: 'SID',
        },
        {
            child: true,
            resultType: 'city',
            countryNames: 'Cape Verde',
            cityNames: 'Sal',
            cityCode: 'SID',
            airportNames: 'Amílcar Cabral International',
            airportCode: 'SID',
        },
        {
            child: false,
            resultType: 'city',
            countryNames: 'Netherlands',
            cityNames: 'Saba',
            cityCode: 'SAB',
            airportNames: 'Juancho E. Yrausquin',
            airportCode: 'SAB',
        },
        {
            child: true,
            resultType: 'city',
            countryNames: 'Netherlands',
            cityNames: 'Saba',
            cityCode: 'SAB',
            airportNames: 'Juancho E. Yrausquin',
            airportCode: 'SAB',
        },
    ],
    erorr: null,
    loading: false,
};

const FlightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAsyncFlights.fulfilled, (state: any, action: any) => {
                return {
                    flights: SortFlight(action.payload.data),
                    loading: false,
                    erorr: null,
                };
            })
            .addCase(getAsyncFlights.pending, (state: any, action: any) => {
                return {
                    ...state,
                    loading: true,
                    erorr: null,
                };
            })
            .addCase(getAsyncFlights.rejected, (state: any, action: any) => {
                return {
                    ...state,
                    loading: false,
                    erorr: action.error.message,
                };
            });
    },
});

export default FlightsSlice.reducer;
