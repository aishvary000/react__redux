
import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props)=>{
    const [toDisplayAdd,setToDisplayAdd] = useState(false);
        const saveExpenseDataHandler = (enteredExpenseData)=>{
            const expenseData = {
                ...enteredExpenseData,
                id:Math.random().toString()
            }
            //console.log(expenseData)
            props.onExpenseAdd(expenseData);

        }
        const disableDisplayHandler=()=>{
            setToDisplayAdd(false);
        }
        const toDisplayHandler = ()=>{
            console.log(toDisplayAdd);
            setToDisplayAdd(true);
        }
        return(
            <div className='new-expense'>
               {toDisplayAdd === false?(<button onClick={toDisplayHandler}>Add New Expense</button>):(<ExpenseForm disableDisplay={disableDisplayHandler} onSaveExpenseData={saveExpenseDataHandler}/>)}
                
                
            </div>
        )

}
export default NewExpense