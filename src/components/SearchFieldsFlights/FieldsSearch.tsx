import { Autocomplete, TextField } from '@mui/material';
import { AirPlane } from 'react-huge-icons/outline';

interface FieldsSearchInterface {
    label: string;
    options: {
        title: string;
    }[];
    icon: JSX.Element | string;
}

export default function FieldsSearch({ label, options, icon }: FieldsSearchInterface) {
    return (
        <Autocomplete
            freeSolo
            fullWidth
            id='free-solo-2-demo'
            disableClearable
            options={options.map(option => option.title)}
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
                            type: 'search',
                        }}
                    />

                    <div className='p-4 text-gray-400'>{icon}</div>
                </div>
            )}
        />
    );
}
