import axios from "axios";
import { action, observable, runInAction, configure } from "mobx";
import TodoModel from "./TodoModel";

export interface Todo {
    title: string,
    id: string,
    completed: boolean
}

configure({enforceActions: true}) // strict mode

class TodoStore {
    @observable count: number = 0;

    @observable.ref
    todos: TodoModel[] = []

    @action
    updateCount = () => {
        this.count = this.count + 1;
    }

    @action
    addTodo = (title: string) => {
        console.log('added')
        // this.todos.push({
        //     id: 'sadfa',
        //     completed: false,
        //     title
        // })
        // this.todos = [...this.todos, {
        //     id: 'sdfas',
        //     completed: false,
        //     title
        // }]
    }

    @action
    toggleComplete = (e: Todo) => {

    }

    @action
    getTodos = () => {
        axios.get('http://localhost:7000/todos').then(res => {
                const data: TodoModel[] = res.data.map((e: Todo) => new TodoModel(e))
                runInAction(() => {
                    this.todos = data;
                })
            })
    }

}

const store = new TodoStore();

export default store;