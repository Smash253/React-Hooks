import react, {useState} from 'react';

function Todo({todo,index}) {
  return (
    <div className='todo'>
      {todo.text}
    </div>
  )
};

function ToDoForm({addTodo}) {
  const [value, setValue] = useState('');

    const handleSubmit= e=> {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'className='input' value={value} onChange={e => setValue(e.target.value)} ></input>
    </form>
  )
}

function App() {
const [todos, setTodos]= useState([
  {

    text: 'Learn React',
    isCompleted: false

},
{

  text: 'Learn JS',
  isCompleted: false

},
{

  text: 'Be the best',
  isCompleted: false

}]);

const addTodo= text => {
  const NewTodos=[...todos, {text}];
  setTodos(NewTodos);
}

return (
 <div className='app'>
   <div className='todo-list'>
    {todos.map((todo, index) =>(
      <Todo key={index} index={index} todo={todo} />))}
      <ToDoForm addTodo={addTodo}/>
   </div>
 </div> 
)

};


export default App;