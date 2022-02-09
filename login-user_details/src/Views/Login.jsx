import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button,Input, Label, FormGroup} from 'reactstrap';
import * as yup from 'yup'
const initialState = {email : '',password : ''}

const constants = {
    SET_EMAIL : "SET_EMAIL",
    SET_PASSWORD : "SET_PASSWORD",
    RESET : "RESET"
}
const reducer = (state,action) => {
    const{type,data} = action
    switch(type){
        case constants.SET_EMAIL:
            
            return {
            ...state,
                email : data
        }
        case constants.SET_PASSWORD:
            return {
            ...state,
                password : data
        }
        case constants.RESET:
            return {
                
            ...initialState
        }
        default:
            return state
    }
}
const loginschema = yup.object().shape({
    email : yup.string().email().required(),
    password : yup.string().min(4).max(10).required()
})


function Login() {
    const navigate = useNavigate()
    const [state,dispatch] = useReducer(reducer,initialState)
    const {email,password} = state
    const setEmail = (data) => {
        dispatch({type: constants.SET_EMAIL,data})
    }
    const setPassword = (data) => {
        dispatch({type: constants.SET_PASSWORD,data})
    }
    const setReset = (data) => {
        dispatch({type:constants.RESET,data})
    }
    const onLoginSubmit = (event) => {
        event.preventDefault();
        const checkValid = loginschema.isValid({email, password});
        const requestOptions = {
            method: 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({email,password})
        }
        fetch("https://reqres.in/api/login",requestOptions)
        .then((response) => response.json())
        .then(data => {
                if(data.token && checkValid){
                    console.log('Login successful');
                    navigate("/users")
                }
                else{
                    console.log('wrong input')
                }
        })
    }
    
    return (
        <>
        <Form onSubmit={onLoginSubmit}>
            <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter your email id" onChange={(e) => setEmail(e.target.value)} value={email}/>      
            </FormGroup>
            <FormGroup>
            <Label>Password</Label>
            <Input type="text" name="password" id="password" placeholder="Jor jor se bolke sabko bata de" onChange={(e) => setPassword(e.target.value)} value = {password}/>  
            </FormGroup>   
            <Button onClick={setReset}>Reset all fields</Button>
            <Button type="submit">Submit</Button> 
        </Form>
        <div>
            The login details are email:eve.holt@reqres.in , password : cityslicka
        </div>
        </>
    )
}

export default Login
