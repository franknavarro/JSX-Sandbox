// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  return (
    <div>
      <label class="class" for="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
    </div>
  );
};


// Take the react componenet and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
