import { AirPlane, Exchange } from 'react-huge-icons/outline';
import FieldsSearch from '@/components/SearchFieldsFlights/FieldsSearch';

export default function SearchFieldsFlights() {
    return (
        <div className='relative flex flex-col lg:flex-row items-center justify-between border rounded'>
            <div className='w-full lg:w-[45%] border-b lg:border-r lg:border-b-0'>
                <FieldsSearch
                    label='origin (city ، airport)'
                    icon={<AirPlane className='w-5 h-5' />}
                />
            </div>
            <div className='flex justify-center w-full lg:w-[10%] py-2.5'>
                <Exchange className='w-7 h-7 text-gray-600' />
            </div>
            <div className='w-full lg:w-[45%] border-t lg:border-l lg:border-t-0'>
                <FieldsSearch
                    label='destination (city ، airport)'
                    icon={<AirPlane className='w-5 h-5' />}
                />
            </div>
        </div>
    );
}
