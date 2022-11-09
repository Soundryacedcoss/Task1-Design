import './App.css';
import { BottomPage } from './BottomPage';
import { MidPage } from './MidPage';
import { Toppage } from './Toppage';
function App() {
  return (
    <div className="App">
      <Toppage/>
      <MidPage/>
      <BottomPage/>
    </div>
  );
}

export default App;
