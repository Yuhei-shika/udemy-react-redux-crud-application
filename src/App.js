import React, { Component } from 'react';

//const App = () => {
  //return (
   // <div>
     // Hello world!
   // </div>
 // );
//};

//export default App;

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <label>Click me!</label>
        <input type="text" onClick={() => alert('Hello world!')}/>
      </React.Fragment>
      );  
  }
}

export default App;