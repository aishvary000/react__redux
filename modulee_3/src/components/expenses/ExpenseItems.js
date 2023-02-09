import ExpenseItem from './expenseItem'
import ExpenseFilter from '../expenseFilter/ExpenseFilter'
import './ExpenseItems.css'
import React,{useState} from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
function ExpenseItems(props)
{
    const [selectedYear,setSelectedYear]=useState('2020');
    const [expenses,setExpenses]=useState(props.expenses);
    const yearChangeHandler=(selectedyearr)=>{
        setSelectedYear(selectedyearr);
       
        
    }
    const filteredExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() ===  selectedYear;
    })
    
    return(
      
        
       
        <div className="expenses">
        <ExpenseFilter defaultYear={selectedYear} onYearChange={yearChangeHandler}/>
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense}/>
       
       
        </div>
        
    )
}
export default ExpenseItems