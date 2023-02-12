import React,{useState,useRef} from 'react'
import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/button'
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props)=>{

    const  nameInputRef = useRef();
    const  ageInputRef = useRef();
    const [error, setError] = useState();
    const addUserHandler = (event) =>{

        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0)
        {
            setError({
                title:"InValid input",
                message:"Please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if(+enteredUserAge<1) //whatever is received inside input tag is received as string, as in useState i have
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
            name:enteredName,
            age:enteredUserAge
        };
        props.addUser(user);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";


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
        <input  id="userdname" type="text" ref={nameInputRef}></input>
        <label htmlFor='age'>Age (Years) </label>
        <input  id="age" type="number" ref={ageInputRef}></input>
        <Button type = 'submit'>Add User</Button>
        {/* <button type='submit'>Add user</button> */}
    </form>
    </Card>
    </div>
    )
}
export default AddUser