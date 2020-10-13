import React, {useState} from 'react'
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Modal, TextField} from '@material-ui/core'
import {db} from './firebase'
import {makeStyles} from '@material-ui/core/styles'
import SelectInput from '@material-ui/core/Select/SelectInput'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        margin: 'auto',
        left: 0,
        right: 0,
        top: '30%',
        textAlign: 'center',
        borderRadius: '15px',
        border: 'none',
        outline: 'none'
    },
}))

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const handleOpen = () => {
        setOpen(true)
    }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false)
    }


    return (
        <div>
            <Modal open={open} onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>Edit</h1>
                    <TextField placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}></TextField>
                    <br/>
                    <Button onClick={event => setOpen(false)}>❌ Cancel</Button>
                    <Button onClick={updateTodo}>Update</Button>
                    
                </div>
            </Modal>

            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Dummy Deadline 🕥"></ListItemText>
                    <Button onClick={event => setOpen(true)}>📝Edit</Button>
                    <Button>✔️Done</Button>
                    <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>❌</Button>
                </ListItem>
            </List>
        </div>
            
    )
}

export default Todo
