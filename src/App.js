import React, { Component } from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import {incrementAction, decrementAction} from './counter/actions'

class App extends Component {
  render() {
    console.log(this);
    return (
   <div>
     <Counter {...this.props}/>
     <Counter {...this.props}/>
      
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
    increment: () => dispatch(incrementAction ()),
    decrement: () => dispatch(decrementAction()),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
