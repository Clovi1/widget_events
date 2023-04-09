import {types} from "mobx-state-tree";

export const TaskModel =types.model('TaskModel', {
    id: types.identifier,
    date: types.string,
    time: types.string,
    title: types.string,
})