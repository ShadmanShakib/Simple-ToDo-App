import React, {  createContext, useState } from 'react';
import {nanoid} from 'nanoid'
export const TodoContext=createContext({});

export  function FirstContextProvider(props:any) {

    //default todos
     const TodoList=[
    {id:'1', body:'Wear masks', completed:false, edit:false, createdAt: new Date('2020-03-17T12:03:00')}, 
    {id:'2', body:'Wash your hand', completed:false, edit:false, createdAt:new Date('2020-03-20T12:02:00')}, 
    {id:'3', body:'Maintain Social distance', completed:false, edit:false, createdAt:new Date('2020-04-20T12:02:03')}]

    // making state for updating doto
     const [todos, setTodos]=useState(TodoList);

    //function for adding new todo
    const addTodo=(body:string)=>{
      const newTodos=[...todos, {id:nanoid(), body:body, completed:false, edit:false, createdAt:new Date(Date())}]
      setTodos(newTodos)
    }
    //edit buttion funciton
    const editTodo=(index:any)=>{
      const edittingTodo=[...todos]
      edittingTodo[index].edit=true
      setTodos(edittingTodo)
    }
    //editDone
    const doneEditing=(index:any, body:string)=>{
      const afterEdit=[...todos]
      if(body){
        afterEdit[index].body=body
      }
      
      afterEdit[index].edit=false;
      setTodos(afterEdit)
    }
    //completed todo
    const completedTodo=(index:any)=>{
     const completedTask=[...todos]
     completedTask[index].completed=!completedTask[index].completed;
     setTodos(completedTask)
    }
    //Deleting a todo
    const deleteTodo=(id:any)=>{
      const deletingTodo=todos.filter(todo=>id!==todo.id)
      setTodos(deletingTodo)
    }
    return (
      <TodoContext.Provider value={{todos, addTodo, deleteTodo, editTodo, doneEditing, completedTodo}}>
        {props.children}
      </TodoContext.Provider>
    )
}
