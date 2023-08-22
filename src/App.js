import './App.css';
import Header from "./component/Header"
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {useState} from "react";


/***
     * P316 (좌측 하단기준)
     */

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "놀기",
        createDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "밥먹기",
        createDate: new Date().getTime(),
    },
];
function App() {
    const [todo, setTodo] = useState(mockTodo);


    const onCreate = (content) => {
        const newItem = {
            id: 0,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
    };
  return (
    <div className="App">
        <Header />
        <TodoEditor/>
        <TodoList/>
        <h2>Hello React.1</h2>
    </div>
  );
}

export default App;
