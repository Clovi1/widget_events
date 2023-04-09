import React, {useState} from 'react';
import {Button, Popover} from "@mui/material";
import {observer} from "mobx-react-lite";
import {Icon} from "@iconify/react";

export const FunctionsPopover = observer(() => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = !!anchorEl;
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div onClick={handleClick}>
                <Icon className={'cursor-pointer text-black'} width={25} height={25} icon="mdi:dots-vertical"/>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className='flex flex-col items-center w-32'>
                    <div
                        onClick={() => console.log('button 1')}
                        className={'p-2 w-full cursor-pointer text-center text-base hover:bg-custom-green-100'}
                    >
                        button 1
                    </div>
                    <div
                        onClick={() => console.log('button 2')}
                        className={'p-2 w-full cursor-pointer text-center text-base hover:bg-custom-green-100'}
                    >
                        button 2
                    </div>
                </div>
            </Popover>
        </>
    );
})