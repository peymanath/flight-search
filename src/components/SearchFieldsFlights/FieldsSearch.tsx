import { Autocomplete, TextField } from '@mui/material';
import { FieldsSearchInterface, DestracturData } from '@/types/components/SearchFieldsFlights';
import { Fragment } from 'react';
import ResultItemSearch from '@/components/SearchFieldsFlights/ResultItemSearch';

const PopperComponent = (props: any) => {
    return <div className='absolute top-16 right-0 left-0'>{props.children}</div>;
};

export default function FieldsSearch({ label, options, icon }: FieldsSearchInterface) {
    return (
        <Autocomplete
            PopperComponent={PopperComponent}
            freeSolo
            fullWidth
            id='FieldsSearch'
            options={options}
            getOptionLabel={(option: any) =>
                option.child ? option.airportNames : option.cityNames
            }
            renderInput={params => (
                <div className='flex items-center justify-between'>
                    <TextField
                        {...params}
                        label={label}
                        fullWidth
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
                            autoComplete: 'new-password',
                        }}
                    />
                    <div className='p-4 text-gray-400'>{icon}</div>
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
