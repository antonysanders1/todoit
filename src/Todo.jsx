import React from 'react'
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy Deadline 🕥"></ListItemText>
            </ListItem>
        </List>
            
    )
}

export default Todo
