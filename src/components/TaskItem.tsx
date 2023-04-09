import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {ITaskModel} from "../mst/interfaces";
import {Icon} from "@iconify/react";
import {FunctionsPopover} from "./FunctionsPopover";

interface TaskItemProps {
    task: ITaskModel
}

const TaskItem: FC<TaskItemProps> = observer(({task}) => {
    const date = task.date.split('.')
    return (
        <div className={'flex items-center  rounded bg-custom-gray-100 mb-2 overflow-hidden text-xs'}>
            <div className={'px-2.5 leading-4 py-1 grow h- bg-custom-gray-300'}>{date[0]}.<br/>{date[1]}</div>
            <div className={'p-2'}>{task.time}</div>
            <div className={'p-2 w-full text-sm'}>{task.title}</div>
            <FunctionsPopover/>
        </div>
    );
});

export default TaskItem;