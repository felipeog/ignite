import { useState } from 'react'
import { FiCheckSquare, FiTrash } from 'react-icons/fi'
import { nanoid } from 'nanoid'

import '../styles/tasklist.scss'

interface Task {
  id: string
  title: string
  isComplete: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newTaskTitle.length) {
      return
    }

    setTasks((prevTasks) => {
      const newTask = {
        id: nanoid(),
        title: newTaskTitle,
        isComplete: false,
      }

      return [...prevTasks, newTask]
    })
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) {
    event.preventDefault()

    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: !task.isComplete,
          }
        }

        return task
      })
    })
  }

  function handleRemoveTask(id: string) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.id !== id
      })
    })
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <form className="input-group" onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />

          <button type="submit" data-testid="add-task-button">
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </form>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? 'completed' : ''}
                data-testid="task"
                onClick={(event) => handleToggleTaskCompletion(event, task.id)}
              >
                <label className="checkbox-container">
                  <input type="checkbox" readOnly checked={task.isComplete} />

                  <span className="checkmark"></span>
                </label>

                <p>{task.title}</p>
              </div>

              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  )
}
