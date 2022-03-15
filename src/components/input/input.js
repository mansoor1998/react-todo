import React, { useState } from "react";
import styled from "@emotion/styled";
import { CalendarTodayOutlined } from "@material-ui/icons";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Calender from "../calender/calender";

const Wrapper = styled.div`
    background-color: #ccc;
    width: 100%;
    padding: 5px;
    // &:focus {
    //     border: 1px solid blue;
    // }
`

const Input = styled.input`
    border: 0;
    flex: 1;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    &:active {
        border: none;
    }
`


export default function AppInput({ onEnter = null, ...props }) {

    const [date, setDate] = useState(new Date());

    return (
        <Wrapper className="d-flex align-items-center">
            <div className="flex-grow-1">
                <Input onKeyUp={(e) => {
                    e.preventDefault();
                    if (e.key === "Enter" && onEnter && onEnter instanceof Function) {
                        onEnter({ title: e.currentTarget.value, date: date })
                        e.currentTarget.value = "";
                    }
                }} />
            </div>
            <div className="pe-2 ps-2">
                <Calender date={date} onDateSelect={(d) => { setDate(d) }} />
            </div>
        </Wrapper>
    );
}