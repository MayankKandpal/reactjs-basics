import './App.css';
import Welcome from './components/class/Welcome';
import Greet from './components/function/Greet';
import { Named } from './components/function/Named';
import UserGreeting from './conditional-rendering/UserGreeting';
import UserGreetingTwo from './conditional-rendering/UserGreetingTwo';
import ClassClick from './event-handling/ClassClick';
import EventBind from './event-handling/EventBind';
import FunctionClick from './event-handling/FunctionClick';
import Hello from './jsx/hello';
import NameList from './list-rendering/NameList';
import NameListOne from './list-rendering/NameListOne';
import NameListThree from './list-rendering/NameListThree';
import NameListTwo from './list-rendering/NameListTwo';
import Person from './list-rendering/Person';
import Parent from './parent-child/Parent';
import Greetings from './props/Greetings';
import Message from './state/Message';
// import Person from './state/Person';

function App() {
  return (
    <div className='container'>
      <h1>Welcome to React JS</h1>
      {/* <EventBind/>
      <br />
      <FunctionClick/>
      <br />
      <ClassClick/>
     <br/>
     <Parent/>
     <br/>
     <UserGreeting/>
     <br />
     <UserGreetingTwo/> */}
     <NameListThree/>
    </div>
    
  )
}

export default App;
