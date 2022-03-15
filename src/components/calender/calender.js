import React from "react";
import { CalendarTodayOutlined } from "@material-ui/icons";
import Popover from "@mui/material/Popover";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

export default function Calender({
    date = null,
    onDateSelect = null,
    ...props
}) {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(date);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <CalendarTodayOutlined aria-describedby={id} onClick={handleClick} style={{ 'cursor': 'pointer' }} />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo="year"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                            onDateSelect(newValue);
                        }}
                        views={['day']}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Popover>
        </>
    );
}