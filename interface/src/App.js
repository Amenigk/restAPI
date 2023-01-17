import './App.css';
import './components/styleSheet.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getUsers} from './redux/actions';
import List from './components/List';
import Add from './components/Add';


function App() {
  const dispatch=useDispatch()
  const {users} = useSelector(state=>state)

  useEffect (() => {
  dispatch(getUsers())
  
  },[])

  return (

    <div><h1> My favorite list </h1> 
    
    <div >
      
       <Add/>
       <br/>
       <List key={users._id}/>
        
      
    
    </div>
    </div>
  );
}

export default App;
