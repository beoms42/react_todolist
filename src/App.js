import './App.css';
import Header from "./component/Header"
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {useState, useRef} from "react";


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
    const idRef = useRef(3);
    const [todo, setTodo] = useState(mockTodo);


    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current = idRef.current +1;
    };
  return (
    <div className="App">
        <Header />
        <TodoEditor onCreate={onCreate}/>
        <TodoList todo={todo}/>
        <h2>Hello React.1</h2>
    </div>
  );
}

export default App;
