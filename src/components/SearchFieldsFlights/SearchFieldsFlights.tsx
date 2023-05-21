import {Autocomplete, TextField} from "@mui/material";
import {alpha, styled} from '@mui/material/styles';
import Box from "@mui/material/Box";
import {AirPlane, Exchange} from "react-huge-icons/outline";
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
];
export default function SearchFieldsFlights() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between border rounded">
            <div className="w-full lg:w-[45%] border-b lg:border-r lg:border-b-0">
                <Autocomplete
                    freeSolo
                    fullWidth
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <div className="flex items-center justify-between">
                            <TextField
                                {...params}
                                label="origin (city ، airport)"
                                fullWidth
                                sx={{
                                    "& label": {
                                        color: "#bfbfbf",
                                        backgroundColor: "white",
                                        lineHeight: "25px",
                                        width: "90%",
                                        paddingLeft: "10px"
                                    },
                                    "& fieldset": {border: 'none', padding: "0px"},
                                    "& label.Mui-focused": {
                                        color: "var(--color-primary)",
                                    },
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />

                            <div className="p-4">
                                <AirPlane className="w-5 h-5 text-gray-400"/>
                            </div>
                        </div>
                    )}
                />
            </div>
            <div className="flex justify-center w-full lg:w-[10%] py-2.5">
                <Exchange className="w-7 h-7 text-gray-600"/>
            </div>
            <div className="w-full lg:w-[45%] border-t lg:border-l lg:border-t-0">
                <Autocomplete
                    freeSolo
                    disableCloseOnSelect
                    fullWidth
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <div className="flex items-center justify-between">
                            <TextField
                                {...params}
                                label="destination (city ، airport)"
                                fullWidth
                                sx={{
                                    "& label": {
                                        color: "#bfbfbf",
                                        backgroundColor: "white",
                                        lineHeight: "25px",
                                        width: "90%",
                                        paddingLeft: "10px"
                                    },
                                    "& fieldset": {border: 'none', padding: "0px"},
                                    "& label.Mui-focused": {
                                        color: "var(--color-primary)",
                                    },
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                            <div className="p-4">
                                <AirPlane className="w-5 h-5 text-gray-400"/>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}