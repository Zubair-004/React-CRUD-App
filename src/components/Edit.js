import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid';


const Edit = (props) => {

    
    const [selectedUser, setSelectedUser] = useState({
        id:'', name:'', gender:'', age:'' 
    });
    const {users, editUser} = useContext(GlobalContext);

    const history = useHistory();

    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    },[currentUserId,users])

    const onSubmit = (e) => {
        editUser(selectedUser);
        history.push('/');  
    }

    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name*</Label>
                <Input required type="text" name="name" value={selectedUser.name} onChange={onChange} />
                <Label>Gender*</Label>
                <Input required type="text" name="gender" value={selectedUser.gender} onChange={onChange}/>
                <Label>Age*</Label>
                <Input required type="number"  name="age" value={selectedUser.age} onChange={onChange} min="0"/>
                <br/>
            </FormGroup>
            <Button type="submit">Update</Button>
            <Link to='/' style={{marginLeft:"1rem"}} className = "btn btn-danger">Cancel</Link>
        </Form>
    )
}

export default Edit;

