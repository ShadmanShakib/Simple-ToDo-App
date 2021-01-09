import React,{useContext, useEffect, useRef} from 'react'
import { TodoContext } from '../Context/TodoContext'

export default function TodoView() {
   const {todos, deleteTodo,editTodo, doneEditing, completedTodo}:any=useContext(TodoContext);
   const inputRef=useRef<HTMLInputElement>(null)
  const handleClick=(index:any)=>{
      if(inputRef.current){
          doneEditing(index, inputRef.current.value)
      }
  }
 useEffect(()=>{
     if(inputRef.current){
         inputRef.current.focus()
     }
 })
   return (
        <div>
            {todos
            .sort((a:any,b:any)=>b.createdAt-a.createdAt)
            .sort((a:any, b:any)=>a.completed-b.completed)
            .map((todo:any, index:any)=>{
              return(
                <div className=' flex flex-col items-center justify-center' key={todo.id}>
                { todo.edit?
                //edit view
                 <div className={`w-96 bg-white mt-3 px-2 rounded py-2 flex flex-row items-center ${todo.completed?'':"shadow-md"} ` }>
                    <form className='' onSubmit={(e)=>{e.preventDefault(); handleClick(index)}}>
                     <input className='bg-gray-100 px-2 w-56 py-1 rounded focus:outline-none focus:ring-2 focus:border-transparent focus:border-purple-600' ref={inputRef} defaultValue={todo.body} type="text"/>
                     <button className='bg-blue-600 m-1 ml-6 px-3 py-1 text-white rounded-sm shadow'>Done</button>
                     </form>
                     
                  </div>:
                 <div className={`${todo.completed?'bg-gray-200':"bg-white shadow-md"}  bg-white mt-3 px-2 rounded w-96 py-2 flex flex-row items-center justify-between`}>
                     <input className='w-6 rounded' onChange={()=>completedTodo(index)} defaultChecked={todo.completed} id={todo.id} type="checkbox"/>
                    <label className={`w-56 ${todo.completed?'line-through text-gray-600':'text-gray-800'}`}htmlFor={todo.id}>{todo.body}</label>
                    <button  className="bg-indigo-600 text-white px-2 py-1 ml-3 rounded-sm shadow" onClick={()=>{editTodo(index); }}>Edit</button>
                    <button onClick={()=>deleteTodo(todo.id)}  type='button' className='text-red-700 m-2' >Delete</button>
                     
                 </div>
            }
                </div>
            )})}
          
        </div>
    )
}
