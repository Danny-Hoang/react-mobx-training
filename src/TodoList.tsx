import React, { useEffect, useState } from "react";
import axios from 'axios';
import store from './store';
import { observer } from "mobx-react";
import { runInAction } from "mobx";

interface Todo {
    id: string,
    title: string,
    completed: boolean
}

const TodoList = () => {

    const [count, setCount] = useState(0);

    // const [todos, setTodos] = useState<Todo[]>([]);
    const { todos, getTodos } = store;
    const [name, setName] = useState('thuy');

    useEffect(
        () => {
            getTodos();
        },
         []
    )

    const updateComplete= (e: Todo) => {
        runInAction(() => {
            console.log('clicked')
            e.completed = !e.completed;
        })
    }

    return (
        <div>
            {
                todos.map((e, index) => (
                    <div
                        key={e.id}
                    >
                        <b>Title: {e.title}</b>
                        <div
                            onClick={
                                () =>
                                e.toggleComplete()
                            }
                        >Complete: {e.completed ? 'true' : 'false'}</div>

                        
                    </div>
                ))
            }
           
        </div>
    )
}

export default observer(TodoList);