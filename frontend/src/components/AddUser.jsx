import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import './adduser.css';

const initialValue = {
    name: '',
    username: '',
    email: '',
    contact: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, contact } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        /*<Container>
            <Typography variant="h4">Create New Account</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Contact Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='contact' value={contact} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Create Account</Button>
            </FormControl>
        </Container> */



        <div>
        <div>
     <div class="signup-box">
     <h1>Register</h1>
     <h4>It's free and only takes a minute</h4>
     <form>
       <label htmlFor="my-input">Name</label>
       <input type="text"onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
       <label htmlFor="my-input">Username</label>
       <input  onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
       <label htmlFor="my-input">Email</label>
       <input type="text" placeholder="" onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />

       <label htmlFor="my-input">Contact Number</label>
       <input type="text" placeholder="" onChange={(e) => onValueChange(e)} name='contact' value={contact} id="my-input"  />
     
       <button variant="contained" color="primary" onClick={() => addUserDetails()}>Create Account</button>
     <closeform></closeform></form>
     <p>
       By clicking the Sign Up button,you agree to our <br />
       <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
     </p>
   </div>
   <p class="para-2">
     Already have an account? <a href="login.html">Login here</a>
   </p>
  </div>
   </div>


    )
}

export default AddUser;