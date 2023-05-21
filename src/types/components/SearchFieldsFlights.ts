export interface FieldsSearchInterface {
    label: string;
    options: DestracturData[];
    icon: JSX.Element | string;
}

// Flight Response
export interface FlightNamesResponse {
    language: string;
    value: string;
}

export interface FlightAirportsResponse {
    airportCode: string;
    airportNames: FlightNamesResponse[];
}

export interface FlightCitiesResponse {
    cityCode: string;
    cityNames: FlightNamesResponse[];
    airports: FlightAirportsResponse[];
}

export interface FlightResponse {
    resultType: 'airport' | 'city';
    countryCode: string;
    countryNames: FlightNamesResponse[];
    cities: FlightCitiesResponse[];
}

export interface DestracturData {
    child: boolean;
    resultType: 'airport' | 'city';
    countryNames: string;
    cityNames: string;
    cityCode: string;
    airportNames: string;
    airportCode: string;
}
