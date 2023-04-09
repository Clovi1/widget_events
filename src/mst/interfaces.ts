import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'
import {RootStore} from "./store/RootStore.store";
import {TaskModel} from "./models/TaskModel.model";


export interface IRootStore extends Instance<typeof RootStore> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {}
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {}


export interface ITaskModel extends Instance<typeof TaskModel> {}
export interface ITaskModelSnapshotIn extends SnapshotIn<typeof TaskModel> {}
export interface ITaskModelSnapshotOut extends SnapshotOut<typeof TaskModel> {}