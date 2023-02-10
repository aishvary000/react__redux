import React,{useState} from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
const DUMMY_USERS=[{
  id:'a1',
  name:"Aishvary",
  age:21
  },
  {
    id:'a2',
    name:"Naman",
    age:23
  },

]
function App() {
  const[users,setUsers]= useState(DUMMY_USERS)
  
  const addUserHandler = (user)=>{
    
      console.log(user);
      setUsers(prevUsers =>{
        
        return [user,...prevUsers];
      });

  }
  return (
    <div>
      

      
      <AddUser addUser={addUserHandler}/>
      <UsersList users={users}/>
      
    </div>
  );
}

export default App;
