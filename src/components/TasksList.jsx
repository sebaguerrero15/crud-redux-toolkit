import {useSelector, useDispatch} from "react-redux"
import {deleteTask} from "../features/tasks/taskSlice"
import { Link } from "react-router-dom"

const TasksList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <h1>Tareas Creadas: {tasks.length}</h1>  
        <Link to="/create">Ir a Formulario</Link>
      </header>

      {tasks.map(task => (
        <div key={task.id}> 
          <h3>{task.list}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          <Link to={`/edit/${task.id}`}>Editar</Link>
        </div>
      ))}
    </div>
  )
}

export default TasksList