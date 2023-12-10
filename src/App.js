import logo from './logo.svg';
import './App.css';
import MainRoute from './routes/mainRoute';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Notes app</h1>
      <Navbar />
      <MainRoute></MainRoute>
    </div>
  );
}

export default App;
