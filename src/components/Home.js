import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {Link} from 'react-router-dom';
import UserList from './userList';
import {v4 as uuid} from 'uuid';

const Home = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const {addUser} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(), name, gender, age
        }
        addUser(newUser);
    }

    return (
        <div style={{display:"flex"}}>
            <div style={{marginRight:"2rem"}} >
                <UserList/>
            </div>
            <Form onSubmit = {onSubmit} >
                <FormGroup style={{width:"250%"}}>
                    <Label>Name*</Label>
                    <Input required type="text" value={name} onChange = {(e) => setName(e.target.value)} />
                    <Label>Gender*</Label>
                    <Input required type="text" value={gender} onChange = {(e) => setGender(e.target.value)}/>
                    <Label>Age*</Label>
                    <Input required type="number" value={age} onChange = {(e) => setAge(e.target.value)} min="0"/>
                    <br/>
                </FormGroup>
                <Button type="submit">Add</Button>
                {/* <Link to='/' style={{marginLeft:"1rem"}} className = "btn btn-danger">Cancel</Link> */}
            </Form>
        </div>
    )
}

export default Home;
