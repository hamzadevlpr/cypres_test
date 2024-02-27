import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import firestore from './firebase';
import { doc, setDoc } from 'firebase/firestore';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = async () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      await setDoc(doc(firestore, 'todos', todo), {
        todo: todo,
        timestamp: Date.now(),
      });

      setTodo('');
      fetchData();
    }
  };

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(firestore, 'todos'));
    const todosData = [];
    querySnapshot.forEach((doc) => {
      todosData.push({ id: doc.id, ...doc.data() });
    });
    setTodos(todosData);
  };


  return (
    <>
      <div className="max-w-[400px] mx-auto flex flex-col my-40">
        <h1 className="text-gray-50">Todo List</h1>
        <div className="flex mt-4">
          <input
            value={todo}
            name="text"
            onChange={(e) => setTodo(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 outline none"
            placeholder="Add Todo"
          />
          <button type='submit' className="w-40 flex-no-shrink p-2 border-2 rounded text-gray-50" onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <ol className='mt-10 border border-gray-50 pl-8'>
          {todos.map((todoItem,index) => (
            <li key={index} className='text-gray-50 py-3 pl-5 list-decimal'>{todoItem.todo}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
