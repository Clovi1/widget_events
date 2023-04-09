import {applySnapshot, toGenerator, types} from "mobx-state-tree";
import {TaskModel} from "../models/TaskModel.model";
import {flow} from "mobx";
import axios from "axios";
import {createContext, useContext} from "react";
import {IRootStore, ITaskModelSnapshotIn} from "../interfaces";

export const RootStore = types.model('RootStore', {

    tasks: types.array(TaskModel)

}).actions((self) => ({
    fetchTasks: flow(function* (limit:number) {
        try {

            const _tasks: ITaskModelSnapshotIn[] = yield* toGenerator(axios.get(`http://localhost:3000/tasks?_limit=${limit}`).then(res => res.data))
            applySnapshot(self.tasks, _tasks)

        } catch (e) {
            console.log('error in fetchTasks: ', e)
        }
    }),
}))

export const store = RootStore.create({})
export const ContextRootStore = createContext<IRootStore>(store)
export const useRootStore = () => useContext(ContextRootStore)