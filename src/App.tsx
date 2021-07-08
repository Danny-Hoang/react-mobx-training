import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ClassComponent from './ClassComponent';
import TodoList from './TodoList';
import store from './store';
import { observer } from 'mobx-react';
import { Div } from './styles';


function App() {

    // const [count, setCount] = useState(0);

    // const updateCount= () => {
    //     setCount(c => c + 1);
    // }

    const { count, updateCount } = store;

    const [title, setTitle ] = useState('');

    const updateTitle = (e: any) => setTitle(e.target.value);
    const addTodo = () => {
        store.addTodo(title)
    }

  return (
    <div className="App">
        <div>Add todo:
            <input value={title} 
                onChange={updateTitle}
            />

            <button
                onClick={addTodo}
            >Add todo</button>
        </div>
        <div>
            <b>Count: {count}</b>
            <button onClick={() => updateCount()}>Update count</button>
        </div>

        <TodoList />
        <Div>Hello styled component</Div>
    </div>
  );
}

export default observer(App);

