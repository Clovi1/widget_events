import React, {FC, useEffect} from 'react';
import {useRootStore} from "../mst/store/RootStore.store";
import {observer} from "mobx-react-lite";
import TaskItem from "./TaskItem";


const TaskList: FC = observer(() => {
    const {fetchTasks, tasks} = useRootStore()

    useEffect(() => {
        fetchTasks(5)
    }, [])
    return (
        <>
            <div className={'my-2 text-custom-gray-500 text-xs border-b border-custom-gray-400'}>
                <span className={'pl-1'}>TIME</span><span className={'pl-14'}>EVENT</span>
            </div>
            {tasks.map(task =>
                <TaskItem key={task.id} task={task}/>
            )}
        </>
    );
});

export default TaskList;