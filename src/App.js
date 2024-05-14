import logo from './logo.svg';
import './App.css';
import { TodoItem,TodoitemWitCustomHook } from './components/TodoItem';

function App() {
  return (
    <div className="App">
     {/* https://www.youtube.com/watch?v=VJlANS3IPxg */}
     {/* https://www.youtube.com/watch?v=K4vCTeKKCkU  */}
     {/* https://www.youtube.com/watch?v=odpX-rJ_R4Q */}

     <TodoItem/>
     <TodoitemWitCustomHook/>
    </div>
  );
}

export default App;
