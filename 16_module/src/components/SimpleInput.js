import {useState} from 'react';
import '../index.css'
const SimpleInput = (props) => {

  
  const[enteredName,setEnteredName] = useState("");
  const[enteredNameIsValid,setEnteredNameIsValid] = useState(false);
  const[enteredNameTouched,setEnteredNameTouched] = useState(false);
  
  const nameInputChangeHandler = (event) => {

    setEnteredName(event.target.value);
    setEnteredNameTouched(true);

  }

  const nameInputBlurHandler = (event) => {
    
  }

  const onSubmitHandler = (event) => {
      event.preventDefault();
      setEnteredNameTouched(true);
      if(enteredName.trim() === '')
      {
        setEnteredNameIsValid(false);
        return;
      }
      setEnteredNameIsValid(true);
  }
  const nameInputIsInvalid = (enteredNameTouched && !enteredNameIsValid);
  const nameInputClasses = (nameInputIsInvalid ? 'form-control invalid':'form-control');

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler}/>
      </div>
      {nameInputIsInvalid && <p className='error-text'>Name must not be empty...</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
