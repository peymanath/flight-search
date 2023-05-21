import { FlightResponse } from '@/types/components/SearchFieldsFlights';

interface ResultItemSearchInterface {
    options: FlightResponse;
}

export default function ResultItemSearch({ options }: ResultItemSearchInterface) {
    console.log(options.resultType);
    return options.resultType == 'airport' ? (
        <ResultItemSearchAirPort {...options} />
    ) : (
        <ResultItemSearchCity {...options} />
    );
}

function ResultItemSearchAirPort({
    resultType,
    cities,
    countryCode,
    countryNames,
}: FlightResponse) {
    return <></>;
}

function ResultItemSearchCity({ resultType, cities, countryCode, countryNames }: FlightResponse) {
    return <></>;
}
