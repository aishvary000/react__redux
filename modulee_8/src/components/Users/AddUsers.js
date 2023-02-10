import React,{useState} from 'react'
import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/button'
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props)=>{
    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) =>{

        event.preventDefault();
        
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
        {
            setError({
                title:"InValid input",
                message:"Please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if(+enteredAge<1) //whatever is received inside input tag is received as string, as in useState i have
        //initialized it as string
        {
            setError({
                title:"InValid Age",
                message:"Please enter a valid age (Positive values)"
            });
            return;
            
        }
        const user ={
            id:Math.random().toString(),
            name:enteredUserName,
            age:enteredAge
        };
        props.addUser(user);
        setEnteredAge('');
        setEnteredUserName('');


    }
    
    const userNameChangeHandler = (event)=>{
            setEnteredUserName(event.target.value); 
    }
    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value)
    }
    const errorHanler = () => {
        setError(null);
    }
    return(
        <div>

        
    {error && <ErrorModal title={error.title} message = {error.message} onClick={errorHanler}/>};
    <Card className = {styles.input}>

    
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>UserName</label>
        <input value={enteredUserName} onChange={userNameChangeHandler} id="userdname" type="text"></input>
        <label htmlFor='age'>Age (Years) </label>
        <input value={enteredAge} onChange={ageChangeHandler} id="age" type="number"></input>
        <Button type = 'submit'>Add User</Button>
        {/* <button type='submit'>Add user</button> */}
    </form>
    </Card>
    </div>
    )
}
export default AddUser