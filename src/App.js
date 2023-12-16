import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {User} from './elements/User';
import { CreateUser } from './elements/CreateUser';
import { UpdateUser } from './elements/UpdateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User/>}></Route>
          <Route path="/create" element={<CreateUser/>}></Route>
          <Route path="/update/:id" element={<UpdateUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
