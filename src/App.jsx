import React, { useEffect, useMemo, useState, Component } from "react";


//class based component vs function based component


class App extends Component {

  state = { count: 0 }

  increment = ()=> {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (<div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment} >increase count</button>
    </div>)
  }






}


export default App
