
import React, { useReducer } from 'react';
import ComA from './components/componentA'
export const createContext = React.createContext()
const initialState = {
  counter: 5
};
const reducer = (state, action) => {
  console.log('reducer function run', state, state.counter, action.count)
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + action.count }
    case 'decrement':
      return { counter: state.counter - action.count }
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>count - {count.counter}</div>
      asslamualikum ridoy
      <createContext.Provider value={dispatch}> 
        <ComA />
      </createContext.Provider>
    </div>
  );
}

export default App;
