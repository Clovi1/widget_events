import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {ITaskModel} from "../mst/interfaces";
import {FunctionsPopover} from "./FunctionsPopover";

interface TaskItemProps {
    task: ITaskModel
}

const TaskItem: FC<TaskItemProps> = observer(({task}) => {
    const date = task.date.split('.')
    return (
        <div className={'flex items-stretch rounded bg-custom-gray-100 mb-2 overflow-hidden text-xs'}>
            <div className={'px-2.5 py-1 flex items-center leading-4  bg-custom-gray-300'}>{date[0]}.<br/>{date[1]}</div>
            <div className={'p-2 my-auto'}>{task.time}</div>
            <div className={'p-2 w-full text-sm my-auto'}>{task.title}</div>
            <div className={'my-auto'}>
                <FunctionsPopover/>
            </div>
        </div>
    );
});

export default TaskItem;