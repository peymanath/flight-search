import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import {FlightResponse} from "@/types/components/SearchFieldsFlights";
import {Http} from "@/services/HttpRequestConfig";
import type {FlightsInitialStateType} from "@/types/store/store"
import axios from "axios";
import {SortFlight} from "@/components/SearchFieldsFlights/SortData";

export const getAsyncFlights = createAsyncThunk(
    "flights/getAsyncFlights",

    async (searchValue: string, {rejectWithValue}) => {
        try {
            return await axios.get<FlightResponse[], FlightResponse[]>(
                `https://api.beta.safrat.me/flight/place/search/?query=${searchValue || "hi"}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                }
            );
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const initialState: FlightsInitialStateType = {
    flights: [
        {
            child: false,
            resultType: "airport",
            countryNames: "India",
            cityNames: "Surat",
            cityCode: "STV",
            airportNames: "Surat",
            airportCode: "STV"
        },
        {
            child: false,
            resultType: "city",
            countryNames: "India",
            cityNames: "Surat",
            cityCode: "STV",
            airportNames: "Surat",
            airportCode: "STV"
        },
        {
            child: true,
            resultType: "city",
            countryNames: "India",
            cityNames: "Surat",
            cityCode: "STV",
            airportNames: "Surat",
            airportCode: "STV"
        },
        {
            child: false,
            resultType: "city",
            countryNames: "Russia",
            cityNames: "Saratov",
            cityCode: "RTW",
            airportNames: "Saratov Gagarin Airport",
            airportCode: "GSV"
        },
        {
            child: true,
            resultType: "city",
            countryNames: "Russia",
            cityNames: "Saratov",
            cityCode: "RTW",
            airportNames: "Saratov Gagarin Airport",
            airportCode: "GSV"
        },
        {
            child: true,
            resultType: "city",
            countryNames: "Russia",
            cityNames: "Saratov",
            cityCode: "RTW",
            airportNames: "SDSDSD",
            airportCode: "GDV"
        },
        {
            child: false,
            resultType: "city",
            countryNames: "Cape Verde",
            cityNames: "Sal",
            cityCode: "SID",
            airportNames: "Amílcar Cabral International",
            airportCode: "SID"
        },
        {
            child: true,
            resultType: "city",
            countryNames: "Cape Verde",
            cityNames: "Sal",
            cityCode: "SID",
            airportNames: "Amílcar Cabral International",
            airportCode: "SID"
        },
        {
            child: false,
            resultType: "city",
            countryNames: "Netherlands",
            cityNames: "Saba",
            cityCode: "SAB",
            airportNames: "Juancho E. Yrausquin",
            airportCode: "SAB"
        },
        {
            child: true,
            resultType: "city",
            countryNames: "Netherlands",
            cityNames: "Saba",
            cityCode: "SAB",
            airportNames: "Juancho E. Yrausquin",
            airportCode: "SAB"
        }

    ],
    erorr: null,
    loading: false,
};

const FlightsSlice = createSlice({
    name: "flights",
    initialState,
    reducers: {
        setFlights: (state, action: PayloadAction) => {
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAsyncFlights.fulfilled, (state: any, action: any) => {
                return {
                    ...state,
                    flights: SortFlight(action.payload.data) || [],
                    loading: false,
                    erorr: null,
                };
            })
            .addCase(getAsyncFlights.pending, (state: any, action: any) => {
                return {
                    ...state,
                    flights: [],
                    loading: true,
                    erorr: null,
                };
            })
            .addCase(getAsyncFlights.rejected, (state: any, action: any) => {
                return {
                    ...state,
                    flights: [],
                    loading: false,
                    erorr: action.error.message,
                };
            });
    },
});
export const {setFlights} = FlightsSlice.actions;
export default FlightsSlice.reducer;
