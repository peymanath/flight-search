import { Autocomplete, TextField } from '@mui/material';
import {
    FieldsSearchInterface,
    FieldsSearchItemInterface,
} from '@/types/components/SearchFieldsFlights';

export default function FieldsSearch({ label, options, icon }: FieldsSearchInterface) {
    return (
        <Autocomplete
            freeSolo
            fullWidth
            id='free-solo-2-demo'
            options={options}
            autoHighlight
            getOptionLabel={(option: any) => option.title}
            filterSelectedOptions={true}
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
            renderOption={(props, option: FieldsSearchItemInterface) => (
                <li
                    {...props}
                    key={option.id}>
                    {option.title}
                </li>
            )}
        />
    );
}
