import './App.css';
import Counter from './features/counter/Counter';
import PostView from './features/posts/PostView';

function App() {
  return (
    <div className="App">
      <h1>React Counter App</h1>
      <Counter />
      <PostView />
    </div>
  );
}

export default App;
