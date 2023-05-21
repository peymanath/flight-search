import { Autocomplete, TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { AirPlane, Exchange } from 'react-huge-icons/outline';
import FieldsSearch from '@/components/SearchFieldsFlights/FieldsSearch';
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption' },
    { title: 'The Godfather' },
    { title: 'The Godfather: Part II' },
    { title: 'The Dark Knight' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
    { title: '12 Angry Men' },
];
export default function SearchFieldsFlights() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between border rounded'>
            <div className='w-full lg:w-[45%] border-b lg:border-r lg:border-b-0'>
                <FieldsSearch
                    label='origin (city ، airport)'
                    options={top100Films}
                    icon={<AirPlane className='w-5 h-5' />}
                />
            </div>
            <div className='flex justify-center w-full lg:w-[10%] py-2.5'>
                <Exchange className='w-7 h-7 text-gray-600' />
            </div>
            <div className='w-full lg:w-[45%] border-t lg:border-l lg:border-t-0'>
                <FieldsSearch
                    label='flex items-center justify-between'
                    options={top100Films}
                    icon={<AirPlane className='w-5 h-5' />}
                />
            </div>
        </div>
    );
}
