import React, { Component } from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import {incrementAction,
decrementAction, 
incrementByAction,
decrementByAction} from './counter/actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
      value: 0

    };
    this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange(event) {
    this.setState({value: +event.target.value});
  }


  render() {

    console.log(this);
    return (

     
    
  
   <div>
     <Counter {...this.props} {...this.state}/>
     <Counter {...this.props}{...this.state}/>
     <div>Choice your number
<input type='number' value={this.state.value} onChange={this.handleChange}  />

</div>
      
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
