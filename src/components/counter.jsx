import React, { Component } from "react";

class Counter extends Component {
  //  constructor(){
  //      super();

  //      this.handleIncrement=this.handleIncrement.bind(this);
  //  }

  // state = {
  //   value: this.props.counter.value,
  //   tags: []
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags </p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  // handleIncrement = () => {
  //   console.log();
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // };


  // styles={
  //     fontSize:50,
  //     fontWeight:'bold'
  // }
  render() {
    //console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className="btn-primary btn-sm m-2"> {this.props.counter.value} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
        
          className="btn btn-danger btn-sm m-2" 
          onClick={()=> this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <br />
        <hr />
      </div>
    );
  }
}

export default Counter;
// {this.state.tags.length === 0 && 'Please Create a  new tag !'}

// {this.renderTags()}
