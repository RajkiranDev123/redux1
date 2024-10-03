
import './App.css';

import { useSelector,useDispatch } from 'react-redux';
import {increase,decrease} from "./actions/index"

function App() {
  const myState=useSelector(state=>state.inc_dec)
  const dispatch=useDispatch()
  return (
    <div className="App">

      <p>Redux</p>
      <input type="text" value={myState}/>
      <br/>
      <button onClick={()=>dispatch(increase())}>Add</button>
      <button onClick={()=>dispatch(decrease())}>Sub</button>

     
    </div>
  );
}

export default App;
