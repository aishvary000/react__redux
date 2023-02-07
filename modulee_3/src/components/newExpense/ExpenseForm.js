import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = ()=>{
        const [enteredTitle,setEnteredTitle] = useState('');
        const [enteredAmount,setEnteredAmount] = useState(0);
        const [enteredDate,setEnteredDate] = useState('');

        const titleChangeHandler = (event)=>{
            setEnteredTitle(event.target.value);
        }
        const amountChangeHandler = (event)=>{
            setEnteredAmount(event.target.value);
        }
        const dateChangeHandler = (event)=>{
            setEnteredDate(event.target.value);
        }
        return(
            <form>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>amount</label>
                        <input type="number" onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>
                        Add Expense
                    </button>

                </div>
            </form>
        )
}
export default ExpenseForm