import './expenseItem.css'
import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react'
const ExpenseItem=(props)=>
{
  const [title, setTitle]= useState(props.title);
    
    const clickHandler=()=>
    {
      setTitle("Updated !!")
      console.log("Clicked !!!!!!")
    }
return(
    <div className='expense-item'>
    
    <ExpenseDate date = {props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick ={clickHandler}>Change title</button>
    </div>
);

}
export default ExpenseItem