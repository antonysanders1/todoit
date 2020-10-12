import React, {useEffect, useState} from 'react';
import {FormControl, Input, InputLabel, Button} from '@material-ui/core'
import './App.css';
import Todo from './Todo'
import {db} from './firebase'
import  firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //This code fires when app.jsx loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>ToDo-It 🌎!</h1>
      <form>
        <FormControl>
          <InputLabel>Create a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button variant="contained" color="primary" disabled={!input} type="submit" onClick={addTodo}>Add Todo</Button>
        </FormControl>
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
