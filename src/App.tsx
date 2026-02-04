
import { useReducer } from 'react';
import Card from './_components/Card';
import './App.css'
import { reducer } from './redurcer';

export type TodoProps = {
  id: number;
  title: string;
  status: 'done' | 'not done';
  description: string
}

const todoList: TodoProps[] = [{
  id: 1,
  title: 'Learn TypeScript',
  status: 'not done',
  description: 'Study the basics of TypeScript including types, interfaces, and classes.'
}, {
  id: 2,
  title: 'Build a React App',
  status: 'not done',
  description: 'Create a simple React application using TypeScript.'
},
{
  id: 3,
  title: 'Review Code',
  status: 'done',
  description: 'Go through the code to ensure it follows best practices and is free of bugs.'
}]

function App() {

  const [state, dispatch] = useReducer(reducer, todoList)
  const doneTask = state.filter(todo => todo.status === 'done')
  const notDoneTask = state.filter(todo => todo.status === 'not done')

  return (
    <div className="flex">
      <div className='flex flex-col items-center mx-4'>
        <h1 className='text-blue-500 my-4'>
          {doneTask.length === 0 ? " 🤓 No hay nada" : 'Estas son las tareas a realizar'}
        </h1>
        {
          doneTask.map(({ id, title, description, status }) => {
            return (<Card
              key={id}
              className='border rounded-md m-4 max-w-100 p-4'
            >
              <Card.Title className='text-xl font-semibold'>{title}</Card.Title>
              <Card.Description>{description}</Card.Description>
              <Card.Checkbox
                status={status}
                dispatch={dispatch}
                index={id} />
            </Card>)

          })

        }

      </div>
      <hr />
      <div className='flex flex-col items-center border-l-2 px-4'>
        <h1 className=' text-blue-500 my-4'>{notDoneTask.length === 0 ? "🎉 Well done everything ready" : "Aqui hay un poco de trabajo 💥"}</h1>
        {
          notDoneTask.map(({ id, title, description, status }) => {
            return (
              <Card
                key={id}
                className='border rounded-md m-4 max-w-100 p-4'
              >
                <Card.Title className='text-xl font-semibold'>{title} - {status}</Card.Title>
                <Card.Description>{description}</Card.Description>
                <Card.Checkbox
                  status={status}
                  dispatch={dispatch}
                  index={id} />
              </Card>)

          })

        }

      </div>
    </div>
  )
}

export default App
