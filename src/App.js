import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import TestLocal from './components/TestLocal';



function App() {
  return (
    
     <BrowserRouter>
      <Menu />
      <Route exact path="/" component={ListTodo}/>
      <Route path="/addTodo" component={AddTodo}/>
      <TestLocal />
      </BrowserRouter>
  );
}

export default App;
