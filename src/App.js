import React, { Component } from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import {incrementAction,
decrementAction, 
incrementByAction,
decrementByAction} from './counter/actions'

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
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementBy: (num) => dispatch(incrementByAction(num)),
    decrementBy: (num) => dispatch(decrementByAction(num)),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
