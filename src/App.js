import './App.css';
import Welcome from './components/class/Welcome';
import Greet from './components/function/Greet';
import { Named } from './components/function/Named';

function App() {
  return (
    <div className='container'>
      <h1>Welcome To ReactJS</h1>
    <Greet/>
    <Named/>
    <Welcome/>
    </div>
  )
}

export default App;
