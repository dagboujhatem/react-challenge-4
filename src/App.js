import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import DetailTodo from './components/DetailTodo';
import Weather from './components/Weather';


function App() {
  return (
    
     <BrowserRouter>
      <Menu />
      <Route exact path="/" component={ListTodo}/>
      <Route path="/addTodo" component={AddTodo}/>
      <Route path="/weather" component={Weather}/>
      <Route path="/detailTodo/:idTodo" component={DetailTodo}/>
      
      </BrowserRouter>
  );
}

export default App;
