import React, {} from 'react';

import AddNewToDo from './Components/AddNewToDo';
import Header from './Components/Header';
import TodoView from './Components/TodoView';

import { FirstContextProvider} from './Context/TodoContext'


function App() {

return(
   <React.Fragment>
      <div className='bg-gray-400 w-full h-screen'>
         <Header/>
      <FirstContextProvider>
      <AddNewToDo/>
      <TodoView/>
      </FirstContextProvider>
      </div>
   
</React.Fragment>
  
)
}

export default App;
