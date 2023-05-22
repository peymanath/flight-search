import { Autocomplete, TextField } from '@mui/material';
import { FieldsSearchInterface, DestracturData } from '@/types/components/SearchFieldsFlights';
import { useEffect, useState } from 'react';
import ResultItemSearch from '@/components/SearchFieldsFlights/ResultItemSearch';
import { useAppDispatch, useAppSelector } from '@/store/Hooks';
import { getAsyncFlights } from '@/store/Flight/Flights';
import { LoadingDashed } from 'react-huge-icons/outline';

const PopperComponent = (props: any) => {
    return <div className='absolute top-16 right-0 left-0'>{props.children}</div>;
};
export default function FieldsSearch({ label, icon }: FieldsSearchInterface) {
    const { flights, loading } = useAppSelector(state => state.flights);
    const [open, setOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('safrat');
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timeOutId = setTimeout(() => dispatch(getAsyncFlights(query)), 500);
        return () => clearTimeout(timeOutId);
    }, [query]);

    return (
        <Autocomplete
            id='FieldsSearch'
            PopperComponent={PopperComponent}
            freeSolo
            fullWidth
            disableClearable
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            options={flights}
            getOptionLabel={(option: any) =>
                option.child ? option.airportNames : option.cityNames
            }
            renderInput={params => (
                <div className='flex items-center justify-between'>
                    <TextField
                        {...params}
                        label={label}
                        fullWidth
                        onChange={event => setQuery(event.target.value)}
                        sx={{
                            '& label': {
                                color: '#bfbfbf',
                                backgroundColor: 'white',
                                lineHeight: '25px',
                                width: '90%',
                                paddingLeft: '10px',
                            },
                            '& fieldset': { border: 'none', padding: '0px' },
                            '& label.Mui-focused': {
                                color: 'var(--color-primary)',
                            },
                        }}
                        InputProps={{
                            ...params.InputProps,
                        }}
                    />
                    <div className='p-4 text-gray-400'>
                        {loading ? (
                            <LoadingDashed
                                color='inherit'
                                className='w-5 h-5 animate-spin'
                            />
                        ) : (
                            icon
                        )}
                    </div>
                </div>
            )}
            renderOption={(props, option: DestracturData) => (
                // This key value is temporary and must be returned from the ID server
                <ResultItemSearch
                    props={props}
                    options={option}
                    key={`${option.countryNames}-${Math.floor(Math.random() * 100)}`}
                />
            )}
        />
    );
}
