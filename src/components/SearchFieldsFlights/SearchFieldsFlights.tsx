import { AirPlane, Exchange } from 'react-huge-icons/outline';
import FieldsSearch from '@/components/SearchFieldsFlights/FieldsSearch';
import type { FieldsSearchItemInterface } from '@/types/components/SearchFieldsFlights';

const dataPlace: FieldsSearchItemInterface[] = [
    { id: 1, title: 'The Shawshank Redemption' },
    { id: 2, title: 'The Godfather' },
    { id: 3, title: 'The Godfather: Part II' },
    { id: 4, title: 'The Dark Knight' },
    { id: 5, title: '12 Angry Men' },
    { id: 6, title: '12 Angry Men' },
    { id: 7, title: '12 Angry Men' },
];
export default function SearchFieldsFlights() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between border rounded'>
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
