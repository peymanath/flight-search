import {
    DestracturData,
    FlightAirportsResponse,
    FlightNamesResponse,
    FlightResponse,
} from '@/types/components/SearchFieldsFlights';

export const initialDataPlace: FlightResponse[] = [
    {
        resultType: 'airport',
        countryCode: 'IN',
        countryNames: [
            {
                language: 'en',
                value: 'India',
            },
            {
                language: 'ar',
                value: 'الهند',
            },
        ],
        cities: [
            {
                cityCode: 'STV',
                cityNames: [
                    {
                        language: 'ar',
                        value: 'سورت',
                    },
                    {
                        language: 'en',
                        value: 'Surat',
                    },
                ],
                airports: [
                    {
                        airportCode: 'STV',
                        airportNames: [
                            {
                                language: 'ar',
                                value: 'مطار سورات',
                            },
                            {
                                language: 'en',
                                value: 'Surat',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        resultType: 'city',
        countryCode: 'IN',
        countryNames: [
            {
                language: 'en',
                value: 'India',
            },
            {
                language: 'ar',
                value: 'الهند',
            },
        ],
        cities: [
            {
                cityCode: 'STV',
                cityNames: [
                    {
                        language: 'ar',
                        value: 'سورت',
                    },
                    {
                        language: 'en',
                        value: 'Surat',
                    },
                ],
                airports: [
                    {
                        airportCode: 'STV',
                        airportNames: [
                            {
                                language: 'ar',
                                value: 'مطار سورات',
                            },
                            {
                                language: 'en',
                                value: 'Surat',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        resultType: 'city',
        countryCode: 'RU',
        countryNames: [
            {
                language: 'en',
                value: 'Russia',
            },
            {
                language: 'ar',
                value: 'روسيا',
            },
        ],
        cities: [
            {
                cityCode: 'RTW',
                cityNames: [
                    {
                        language: 'ar',
                        value: 'ساراتوف',
                    },
                    {
                        language: 'en',
                        value: 'Saratov',
                    },
                ],
                airports: [
                    {
                        airportCode: 'GSV',
                        airportNames: [
                            {
                                language: 'ar',
                                value: 'Saratov Gagarin Airport',
                            },
                            {
                                language: 'en',
                                value: 'Saratov Gagarin Airport',
                            },
                        ],
                    },
                    {
                        airportCode: 'GDV',
                        airportNames: [
                            {
                                language: 'ar',
                                value: 'DSDSDSDSDSD',
                            },
                            {
                                language: 'en',
                                value: 'SDSDSD',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        resultType: 'city',
        countryCode: 'CV',
        countryNames: [
            {
                language: 'en',
                value: 'Cape Verde',
            },
            {
                language: 'ar',
                value: 'الرأس الأخضر',
            },
        ],
        cities: [
            {
                cityCode: 'SID',
                cityNames: [
                    {
                        language: 'ar',
                        value: 'سال،',
                    },
                    {
                        language: 'en',
                        value: 'Sal',
                    },
                ],
                airports: [
                    {
                        airportCode: 'SID',
                        airportNames: [
                            {
                                language: 'ar',
                                value: 'يبعُد مطار أميلكار كابرال الدولي',
                            },
                            {
                                language: 'en',
                                value: 'Amílcar Cabral International',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        resultType: 'city',
        countryCode: 'NL',
        countryNames: [
            {
                language: 'ar',
                value: 'هولندا',
            },
            {
                language: 'en',
                value: 'Netherlands',
            },
        ],
        cities: [
            {
                cityCode: 'SAB',
                cityNames: [
                    {
                        language: 'ar',
                        value: 'سابا',
                    },
                    {
                        language: 'en',
                        value: 'Saba',
                    },
                ],
                airports: [
                    {
                        airportCode: 'SAB',
                        airportNames: [
                            {
                                language: 'ar',
                                value: '‪Juancho E. Yrausquin Airport‬‏',
                            },
                            {
                                language: 'en',
                                value: 'Juancho E. Yrausquin',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export function SortFlight(initialData: FlightResponse[]) {

    console.log(initialData)

    const makeDataPlace = initialData.map(({resultType, countryNames, cities}: FlightResponse) => {
        return resultType == 'airport'
            ? {
                child: false,
                resultType,
                countryNames: countryNames.filter(
                    ({language, value}: FlightNamesResponse) => language == 'en'
                )[0].value,
                cityNames: cities[0].cityNames.filter(
                    ({language, value}: FlightNamesResponse) => language == 'en'
                )[0].value,
                cityCode: cities[0].cityCode,
                airportNames: cities[0].airports[0].airportNames.filter(
                    ({language, value}: FlightNamesResponse) => language == 'en'
                )[0].value,
                airportCode: cities[0].airports[0].airportCode,
            }
            : [
                {
                    child: false,
                    resultType,
                    countryNames: countryNames.filter(
                        ({language, value}: FlightNamesResponse) => language == 'en'
                    )[0].value,
                    cityNames: cities[0].cityNames.filter(
                        ({language, value}: FlightNamesResponse) => language == 'en'
                    )[0].value,
                    cityCode: cities[0].cityCode,
                    airportNames: cities[0].airports[0].airportNames.filter(
                        ({language, value}: FlightNamesResponse) => language == 'en'
                    )[0].value,
                    airportCode: cities[0].airports[0].airportCode,
                },
                cities[0].airports.map(({airportCode, airportNames}: FlightAirportsResponse) => {
                    return {
                        child: true,
                        resultType,
                        countryNames: countryNames.filter(
                            ({language, value}: FlightNamesResponse) => language == 'en'
                        )[0].value,
                        cityNames: cities[0].cityNames.filter(
                            ({language, value}: FlightNamesResponse) => language == 'en'
                        )[0].value,
                        cityCode: cities[0].cityCode,
                        airportNames: airportNames.filter(
                            ({language, value}: FlightNamesResponse) => language == 'en'
                        )[0].value,
                        airportCode: airportCode,
                    };
                }),
            ];
    });

    let dataPlace: DestracturData[] = makeDataPlace.flatMap((item: any) =>
        Array.isArray(item) ? item : [item]
    );
    return dataPlace.flatMap((item: any) => (Array.isArray(item) ? item : [item]));
}