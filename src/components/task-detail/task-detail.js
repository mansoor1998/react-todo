import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './task-detail.css'
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import React, { useState } from 'react';
import { EmojiPeopleTwoTone, FlagTwoTone, HourglassEmpty, HourglassEmptyRounded, NotesRounded } from '@material-ui/icons';
import { Checkbox, IconButton } from '@mui/material';
import Calender from '../calender/calender';
import styled from '@emotion/styled';
import TodoList from '../todo-list/todo-list';
import { connect } from 'react-redux';
// import TouchRipple from '@mui/material/';
// import styled from '@emotion/styled/types/base';


const TextArea = styled.div`
    border: 0;
    height: max-content;
    padding: 3px 2px;
    border-radius: 3px ;
    &:active, &:focus-visible, &:focus {
        border: 0 !important;
        box-shadow: none;
    }
`

function TaskDetail(props) {
    return !props.task?.title ? (
        <div className='d-flex flex-column justify-content-center align-items-center h-100'>
            <HourglassEmptyRounded fontSize='large' />
            <p className="m-0">No Items are selected.</p>
        </div>
    ) : (
        <>
            <div className='d-flex justify-content-between align-items-center top-section p-2 border-bottom'>
                <div className='d-flex gap-1 align-items-center'>
                    <Checkbox color="secondary" />
                    <Calender />
                </div>
                <div>
                    <FlagTwoTone className='cursor-pointer' />
                </div>
            </div>

            <div className="todo-detail p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="m-0">Task One</h5>
                    <NotesRounded className="cursor-pointer" />
                </div>

                <TextArea className="mb-2" onBlur={(e) => {
                    const text = e.target.innerHTML.trim();
                    if (text === '<br>') e.target.innerHTML = '';
                }} contentEditable="true" placeholder="description...."></TextArea>

                <TodoList />
            </div>

            {JSON.stringify(props.task)}
        </>
    )
}

//@ts-ignore
export default connect((state) => ({ task: state.task }))(TaskDetail)