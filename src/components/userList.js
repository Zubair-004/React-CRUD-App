import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
    return (
        <ListGroup>
            {users.map(user => (
                <ListGroupItem className="d-flex">
                    <div style={{display:"flex", flexDirection:"column", width:"130%"}}>
                        <span style={{whiteSpace:"nowrap"}}>Name: {user.name}</span>
                        <span style={{whiteSpace:"nowrap"}}>Gender: {user.gender}</span>
                        <span style={{whiteSpace:"nowrap"}}>Age: {user.age}</span>
                    </div>
                    <div style={{marginLeft:"5rem", display:"flex"}}>
                    <Link className="btn btn-warning" style={{textDecoration:"none", height:"fit-content"}} to={`/edit/${user.id}`}>Edit</Link>
                    <Button onClick={() => removeUser(user.id) } color="danger" style={{marginLeft:"0.5rem", height:"fit-content"}}>Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
            
        </ListGroup>
    )
}

export default UserList;
