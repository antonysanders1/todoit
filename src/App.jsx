import React, {useEffect, useState} from 'react';
import {TextField, Button, Grid, Card} from '@material-ui/core'
import './App.css';
import Todo from './Todo'
import {db} from './firebase'
import  firebase from 'firebase'
import NavBar from './NavBar';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //This code fires when app.jsx loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
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

      <NavBar/>
      
      <Grid container spacing={1}>
        <Grid item xs={false} sm={1} md={2}></Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Card>
            <form>
              <TextField style={{width: '70%'}} label='Create a Todo ✔️' value={input} onChange={event => setInput(event.target.value)}/>
              <Button variant="contained" color="primary" disabled={!input} type="submit" onClick={addTodo}>➕ Add Todo</Button>       
            </form>
            <ul>
              {todos.map(todo => (
                <Todo todo={todo}/>
              ))}
            </ul>
          </Card>
        </Grid>
        <Grid item xs={false} sm={1} md={2}></Grid>
      </Grid>
    </div>
  );
}

export default App;
