import {Autocomplete, TextField} from "@mui/material";
import {alpha, styled} from '@mui/material/styles';
import Box from "@mui/material/Box";
import {Exchange} from "react-huge-icons/outline";
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
        <div className="flex items-center justify-between border rounded">
            <div className="w-full lg:w-[45%]">
                <Autocomplete
                    freeSolo
                    fullWidth
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
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
                    )}
                />
            </div>
            <div className="border-x flex items-center justify-center w-full lg:w-[10%]">
                <Exchange className="w-7 h-7"/>
            </div>
            <div className="w-full lg:w-[45%]">
                <Autocomplete
                    freeSolo
                    disableCloseOnSelect
                    fullWidth
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
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
                    )}
                />
            </div>
        </div>
    )
}