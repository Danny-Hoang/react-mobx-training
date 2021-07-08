import { action, observable } from "mobx";
import { Todo } from "./store";


class TodoModel {

    constructor(data: Todo) {
        this.completed = data.completed;
        this.id = data.id;
        this.title = data.title;
    }

    id: string = '';
    
    title: string = '';

    @observable
    completed: boolean = false;

    @action
    toggleComplete = () => {
        this.completed = !this.completed;
    }
}

export default TodoModel;