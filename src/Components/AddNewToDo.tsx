import React, {useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContext';

export interface AddNewToDoProps {
    
}
 
const AddNewToDo : React.FC<AddNewToDoProps> = () => {
    const {addTodo}:any=useContext(TodoContext);
    const [inputValue, getInputValue]=useState('');
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        addTodo(inputValue)
    }
    return ( 
    <React.Fragment>
       <form className='flex items-center justify-center ' onSubmit={handleSubmit}>
           <div className='w-96 bg-white py-2 px-2 rounded shadow-md flex items-center justify-between '>
           <input className='bg-gray-300 text-gray-800 mx-1 py-2 w-64 rounded focus:ring-2 focus:outline-none focus:ring-purple-600 focus:border-transparent' value={inputValue} onChange={(e)=>{getInputValue(e.target.value)}} type="text"/>
           <button className='bg-blue-700 text-white py-2 px-5 mr-2  rounded' type='submit'>Add</button>
            </div>
        </form>
    </React.Fragment> 
    );
}
 
export default AddNewToDo ;
