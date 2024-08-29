import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import State from "./Hooks/State";
import Effect from "./Hooks/Effect";
import Ref from "./Hooks/Ref";
import { Context } from "./Hooks/Context";
import Memo from "./Hooks/Memo/Memo";
import Callback from "./Hooks/Call/Callback";
import Reducer from "./Hooks/Reducer";


function App() {
  return (
    <Context>
        <Router>
        <Routes>
          <Route path="/" element={<State />} />
          <Route path="/Effect" element={<Effect />} />
          <Route path="/Ref" element={<Ref />} />
          <Route path="/Memo" element={<Memo/>}/>
          <Route path="/callbck" element={<Callback/>}/>
          <Route path="/Reducer" element={<Reducer/>}/>
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
