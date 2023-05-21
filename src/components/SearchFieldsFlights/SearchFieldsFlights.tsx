import { AirPlane, Exchange } from 'react-huge-icons/outline';
import FieldsSearch from '@/components/SearchFieldsFlights/FieldsSearch';
import { FlightResponse } from '@/types/components/SearchFieldsFlights';

const dataPlace: FlightResponse[] = [
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
export default function SearchFieldsFlights() {
    return (
        <div className='relative flex flex-col lg:flex-row items-center justify-between border rounded'>
            <div className='w-full lg:w-[45%] border-b lg:border-r lg:border-b-0'>
                <FieldsSearch
                    label='origin (city ، airport)'
                    options={dataPlace}
                    icon={<AirPlane className='w-5 h-5' />}
                />
            </div>
            <div className='flex justify-center w-full lg:w-[10%] py-2.5'>
                <Exchange className='w-7 h-7 text-gray-600' />
            </div>
            <div className='w-full lg:w-[45%] border-t lg:border-l lg:border-t-0'>
                <FieldsSearch
                    label='flex items-center justify-between'
                    options={dataPlace}
                    icon={<AirPlane className='w-5 h-5' />}
                />
            </div>
        </div>
    );
}
