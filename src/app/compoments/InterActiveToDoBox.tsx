'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Box, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Checkbox, 
  IconButton, 
  Paper
} from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Title from './Title'

const theme = createTheme({
  palette: {
    primary: {
      main: '#a8dadc',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function MUIToDoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() === '') {
      setError('Please enter a task')
      return
    }
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }])
    setInputValue('')
    setError('')
  }

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={{ maxWidth: 400, mx: 'auto', p: 3 ,borderRadius: 3}}>
        <Title />
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            error={!!error}
            helperText={error}
            InputProps={{
              endAdornment: (
                <Button type="submit" variant="contained" color="primary" sx={{ ml: 1 }}>
                  <AddIcon />
                </Button>
              ),
            }}
          />
        </Box>
        <List>
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText
                    primary={todo.text}
                    sx={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed ? 'text.secondary' : 'text.primary',
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </List>
      </Paper>
    </ThemeProvider>
  )
}

