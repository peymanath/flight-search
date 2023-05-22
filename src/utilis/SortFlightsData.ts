import {
    DestracturData,
    FlightAirportsResponse,
    FlightNamesResponse,
    FlightResponse,
} from '@/types/components/SearchFieldsFlights';

export function SortFlight(initialData: FlightResponse[]) {
    const makeDataPlace = initialData.map(
        ({ resultType, countryNames, cities }: FlightResponse) => {
            return resultType == 'airport'
                ? {
                      child: false,
                      resultType,
                      countryNames: countryNames.filter(
                          ({ language, value }: FlightNamesResponse) => language == 'en'
                      )[0].value,
                      cityNames: cities[0].cityNames.filter(
                          ({ language, value }: FlightNamesResponse) => language == 'en'
                      )[0].value,
                      cityCode: cities[0].cityCode,
                      airportNames: cities[0].airports[0].airportNames.filter(
                          ({ language, value }: FlightNamesResponse) => language == 'en'
                      )[0].value,
                      airportCode: cities[0].airports[0].airportCode,
                  }
                : [
                      {
                          child: false,
                          resultType,
                          countryNames: countryNames.filter(
                              ({ language, value }: FlightNamesResponse) => language == 'en'
                          )[0].value,
                          cityNames: cities[0].cityNames.filter(
                              ({ language, value }: FlightNamesResponse) => language == 'en'
                          )[0].value,
                          cityCode: cities[0].cityCode,
                          airportNames: cities[0].airports[0].airportNames.filter(
                              ({ language, value }: FlightNamesResponse) => language == 'en'
                          )[0].value,
                          airportCode: cities[0].airports[0].airportCode,
                      },
                      cities[0].airports.map(
                          ({ airportCode, airportNames }: FlightAirportsResponse) => {
                              return {
                                  child: true,
                                  resultType,
                                  countryNames: countryNames.filter(
                                      ({ language, value }: FlightNamesResponse) => language == 'en'
                                  )[0].value,
                                  cityNames: cities[0].cityNames.filter(
                                      ({ language, value }: FlightNamesResponse) => language == 'en'
                                  )[0].value,
                                  cityCode: cities[0].cityCode,
                                  airportNames: airportNames.filter(
                                      ({ language, value }: FlightNamesResponse) => language == 'en'
                                  )[0].value,
                                  airportCode: airportCode,
                              };
                          }
                      ),
                  ];
        }
    );

    let dataPlace: DestracturData[] = makeDataPlace.flatMap((item: any) =>
        Array.isArray(item) ? item : [item]
    );
    return dataPlace.flatMap((item: any) => (Array.isArray(item) ? item : [item]));
}
