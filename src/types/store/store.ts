import {DestracturData} from "@/types/components/SearchFieldsFlights";

export interface FlightsInitialStateType {
    flights: DestracturData[],
    erorr: string | null,
    loading: boolean,
}