import Todos from "./components/Todos";
import Todo from './models/todo'
import NewTodo from './components/NewTodo'

const App: React.FC = () => {
	const todos = [
    new Todo('learn React'),
    new Todo('learn Typescript')
  ]

  const submissionHandler = (text: string) => {
    console.log(text)
  }
  
  return (
		<div>
			<Todos items={todos} />
      <NewTodo onSubmit={submissionHandler}/>
		</div>
	);
};

export default App;
