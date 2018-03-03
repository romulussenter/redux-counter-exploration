import React, { Component } from 'react';


import {connect} from 'react-redux';





class App extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        
        
      </div>

    );
  
  } 
}
const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
