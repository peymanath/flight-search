import {
    DestracturData,
    FlightAirportsResponse,
    FlightCitiesResponse,
    FlightNamesResponse,
} from '@/types/components/SearchFieldsFlights';
import { AirPlane, Location } from 'react-huge-icons/outline';

interface ResultItemSearchInterface {
    options: DestracturData;
    props: any;
}

export default function ResultItemSearch({ props, options }: ResultItemSearchInterface) {
    const { resultType, cityCode, airportCode, cityNames, airportNames, countryNames, child } =
        options;

    return (
        <li
            className='!w-full hover:!bg-transparent'
            {...props}>
            <div
                className={`${
                    child ? '!ml-5 ' : ''
                }flex items-start justify-between gap-4 hover:bg-primary/10 p-2 hover:rounded-md !border-b !w-full`}>
                <div className='flex items-center justify-center w-4'>
                    {resultType == 'airport' ? (
                        <AirPlane className='w-5 h-5 text-gray-400' />
                    ) : child ? (
                        <AirPlane className='w-5 h-5 text-gray-400' />
                    ) : (
                        <Location className='w-5 h-5 text-gray-400' />
                    )}
                </div>
                <div className='flex-1'>
                    {resultType == 'airport' ? (
                        <>
                            <p className='font-bold'>{airportNames}</p>
                            <p className='font-thin text-xs'>
                                {cityNames} - {countryNames}
                            </p>
                        </>
                    ) : !child ? (
                        <>
                            <p className='font-bold'>
                                {cityNames} - <span className='text-xs'>all aitports</span>
                            </p>
                            <p className='font-thin text-xs'>{countryNames}</p>
                        </>
                    ) : (
                        <>
                            <p className='font-bold'>{airportNames}</p>
                            <p className='font-thin text-xs'>
                                {cityNames} - {countryNames}
                            </p>
                        </>
                    )}
                </div>
                <div className='w-10'>{child ? airportCode : cityCode}</div>
            </div>
        </li>
    );
}
