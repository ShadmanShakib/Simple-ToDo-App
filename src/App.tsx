import React, {} from 'react';

import AddNewToDo from './Components/AddNewToDo';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TodoView from './Components/TodoView';

import { FirstContextProvider} from './Context/TodoContext'


function App() {

return(
   <React.Fragment>
      <div className='bg-gray-300 w-full min-h-screen'>
         <Header/>
      <FirstContextProvider>
      <AddNewToDo/>
      <TodoView/>
      </FirstContextProvider>
      <Footer/>
      </div>
   
</React.Fragment>
  
)
}

export default App;
