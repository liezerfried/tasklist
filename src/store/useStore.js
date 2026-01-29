
// Store global de tareas usando Zustand. Permite agregar, editar, eliminar y alternar tareas.
import { create } from 'zustand'

export const useTaskStore = create((set) => ({
  tasks: [],
  // Agrega una nueva tarea
  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now(), text, completed: false }
      ]
    })),
  // Alterna el estado completado de una tarea
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    })),
  // Elimina una tarea
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id)
    })),
  // Edita el texto de una tarea
  editTask: (id, newText) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    })),
}))

// Selector para obtener solo las tareas no completadas
export const useVisibleTasks = () =>
  useTaskStore(state => state.tasks.filter(task => !task.completed));