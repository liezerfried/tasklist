
// Componente principal para mostrar y gestionar la lista de tareas.
// Permite agregar, editar, eliminar y marcar tareas como completadas.
import React, { useState, useRef } from 'react'
import { useTaskStore } from '../store/useStore'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import Box from '@mui/material/Box'


const TaskList = () => {
  // Accede al store global de tareas
  const store = useTaskStore()
  const { tasks, addTask, deleteTask, editTask } = store
  // Estados locales para el input, edición y animaciones
  const [input, setInput] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  const [fadingTasks, setFadingTasks] = useState([])
  const fadeTimeouts = useRef({})

  // Maneja el fade out al marcar el checkbox (elimina la tarea con animación)
  const handleToggleFade = (id) => {
    setFadingTasks((prev) => [...prev, id])
    fadeTimeouts.current[id] = setTimeout(() => {
      deleteTask(id)
      setFadingTasks((prev) => prev.filter(tid => tid !== id))
      clearTimeout(fadeTimeouts.current[id])
    }, 400)
  }

  // Limpia los timeouts al desmontar el componente
  React.useEffect(() => {
    const timeouts = fadeTimeouts.current
    return () => {
      Object.values(timeouts).forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  // Agrega una nueva tarea
  const handleAdd = (e) => {
    e.preventDefault()
    if (input.trim()) {
      addTask(input)
      setInput('')
    }
  }

  // Inicia la edición de una tarea
  const handleEdit = (id, text) => {
    setEditingId(id)
    setEditText(text)
  }

  // Guarda la edición de una tarea
  const handleEditSubmit = (id) => {
    if (editText.trim()) {
      editTask(id, editText)
      setEditingId(null)
      setEditText('')
    }
  }

  // Renderiza la interfaz de la lista de tareas
  return (
    <Card sx={{ width: '100%', maxWidth: 480, margin: '3.5rem auto 0 auto', borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Lista de Tareas
        </Typography>
        {/* Formulario para agregar tareas */}
        <Box component="form" onSubmit={handleAdd} sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Agregar tarea"
            size="small"
            fullWidth
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Agregar
          </Button>
        </Box>
        {/* Lista de tareas */}
        <List>
          {tasks.map(task => {
            const isFading = fadingTasks.includes(task.id)
            return (
              <ListItem
                key={task.id}
                sx={{
                  mb: 1,
                  borderRadius: 2,
                  bgcolor: '#f9f9f9',
                  boxShadow: 1,
                  opacity: isFading ? 0 : 1,
                  height: isFading ? 0 : 'auto',
                  transition: 'opacity 0.4s, height 0.4s',
                  overflow: 'hidden',
                  ...(isFading ? { pointerEvents: 'none' } : {})
                }}
                secondaryAction={
                  editingId === task.id ? null : (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {/* Botón para editar tarea */}
                      <IconButton
                        edge="end"
                        color="primary"
                        onClick={() => handleEdit(task.id, task.text)}
                        sx={{ ml: 1, transition: 'background 0.2s', '&:hover': { background: '#1976d222' } }}
                      >
                        <EditIcon />
                      </IconButton>
                      {/* Botón para eliminar tarea */}
                      <IconButton
                        edge="end"
                        color="error"
                        onClick={() => deleteTask(task.id)}
                        sx={{ ml: 1, transition: 'background 0.2s', '&:hover': { background: '#e5393522' } }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )
                }
              >
                {/* Checkbox para marcar tarea como completada y activar fade out */}
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleToggleFade(task.id)}
                  sx={{ mr: 1 }}
                />
                {editingId === task.id ? (
                  // Modo edición de tarea
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <TextField
                      value={editText}
                      onChange={e => setEditText(e.target.value)}
                      size="small"
                      sx={{ flex: 1, mr: 2 }}
                    />
                    {/* Guardar edición */}
                    <IconButton
                      edge="end"
                      color="success"
                      onClick={() => handleEditSubmit(task.id)}
                      sx={{ ml: 1, transition: 'background 0.2s', '&:hover': { background: '#43a04722' } }}
                    >
                      <SaveIcon />
                    </IconButton>
                    {/* Cancelar edición */}
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => setEditingId(null)}
                      sx={{ ml: 1, transition: 'background 0.2s', '&:hover': { background: '#e5393522' } }}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                ) : (
                  // Visualización normal de la tarea
                  <Typography
                    sx={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                      flex: 1,
                      ml: 1,
                    }}
                  >
                    {task.text}
                  </Typography>
                )}
              </ListItem>
            )
          })}
        </List>
      </CardContent>
    </Card>
  )
}

// Exporta el componente de lista de tareas
export default TaskList

